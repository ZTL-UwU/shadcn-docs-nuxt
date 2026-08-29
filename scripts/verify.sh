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
			shift
			code="$(curl -sS -o /tmp/verify-body -w '%{http_code}' "$origin$path" || true)"
			for want in "$@"; do
				if [ "$code" = "$want" ]; then
					printf 'ok %s %s\n' "$path" "$code"
					return 0
				fi
			done
			printf 'FAIL %s got %s want %s\n' "$path" "$code" "$*" >&2
			fail=1
		}
		check '/llms.txt' 200
		check '/llms-full.txt' 200
		# @nuxtjs/mcp-toolkit serves POST at /mcp; GET is 405 (stateless) or 200 with sessions.
		check '/mcp' 200 405
		check '/.well-known/skills/index.json' 200 404
		check '/en' 200
		check '/en/getting-started/introduction' 200
		[ "$fail" -eq 0 ] || die "route checks failed"
		;;
	mdc)
		origin="${2:-http://localhost:3333}"
		fail=0
		strip_tags() {
			tr -d '\n' < "$1" | sed 's/<[^>]*>/ /g; s/&nbsp;/ /g; s/  */ /g'
		}
		check_mdc() {
			path="$1"
			needle="$2"
			mode="${3:-visible}"
			code="$(curl -g -sS -o /tmp/verify-mdc -w '%{http_code}' "$origin$path" || true)"
			if [ "$code" != "200" ]; then
				printf 'FAIL %s got %s want 200\n' "$path" "$code" >&2
				fail=1
				return
			fi
			haystack="/tmp/verify-mdc"
			if [ "$mode" = "visible" ]; then
				strip_tags /tmp/verify-mdc > /tmp/verify-mdc-text
				haystack="/tmp/verify-mdc-text"
			fi
			if ! grep -Fq "$needle" "$haystack"; then
				printf 'FAIL %s missing %s\n' "$path" "$needle" >&2
				fail=1
				return
			fi
			printf 'ok %s 200 %s\n' "$path" "$needle"
		}
		check_mdc '/en/components/docs/alert' 'A default alert with'
		check_mdc '/en/components/docs/alert' 'role="alert"' raw
		check_mdc '/en/components/docs/tabs' 'PostgreSQL'
		check_mdc '/en/components/docs/card' 'Card Title'
		check_mdc '/en/components/prose/markdown' 'Heading 1'
		check_mdc '/en/components/prose/markdown' 'leading-7' raw
		[ "$fail" -eq 0 ] || die "mdc gallery checks failed"
		;;
	*)
		die "usage: scripts/verify.sh baseline | routes [origin] | mdc [origin]"
		;;
esac
