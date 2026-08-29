#!/usr/bin/env bash
# Verify rewrite predicates against a running origin or a generate output.
# Usage:
#   scripts/verify.sh baseline
#   scripts/verify.sh routes [origin]
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
baseline="$root/.audit/baseline"

die() { printf '%s\n' "$1" >&2; exit 1; }

cmd="${1:-}"
case "$cmd" in
	baseline)
		[ -d "$baseline" ] || die "missing $baseline"
		count=0
		blank=0
		shopt -s nullglob
		for f in "$baseline"/*.png; do
			count=$((count + 1))
			size="$(wc -c < "$f")"
			if [ "$size" -lt 20000 ]; then
				printf 'blank or tiny: %s (%s bytes)\n' "$f" "$size" >&2
				blank=$((blank + 1))
			fi
		done
		[ "$count" -ge 4 ] || die "expected at least 4 baseline pngs, found $count"
		[ "$blank" -eq 0 ] || die "$blank screenshot(s) look empty"
		printf 'baseline ok: %s pngs\n' "$count"
		;;
	routes)
		origin="${2:-http://localhost:3000}"
		fail=0
		check() {
			path="$1"
			want="$2"
			code="$(curl -sS -o /tmp/verify-body -w '%{http_code}' "$origin$path" || true)"
			if [ "$code" != "$want" ]; then
				printf 'FAIL %s got %s want %s\n' "$path" "$code" "$want" >&2
				fail=1
			else
				printf 'ok %s %s\n' "$path" "$code"
			fi
		}
		check '/llms.txt' 200
		check '/llms-full.txt' 200
		check '/mcp' 200
		check '/en' 200
		check '/en/getting-started/introduction' 200
		[ "$fail" -eq 0 ] || die "route checks failed"
		;;
	*)
		die "usage: scripts/verify.sh baseline | routes [origin]"
		;;
esac
