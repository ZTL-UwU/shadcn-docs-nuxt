#!/usr/bin/env bash
# Capture baseline screenshots of the current product look.
# Usage: scripts/capture-baseline.sh [origin]
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
out="$root/.audit/baseline"
origin="${1:-https://shadcn-docs-nuxt.vercel.app}"
chrome="${CHROME:-/usr/bin/google-chrome-stable}"

mkdir -p "$out"

shot() {
	name="$1"
	path="$2"
	"$chrome" --headless --disable-gpu --no-sandbox --window-size=1440,900 \
		--screenshot="$out/$name.png" "$origin$path"
}

shot home '/'
shot docs-intro '/getting-started/introduction'
shot gallery-alert '/components/docs/alert'
shot gallery-tabs '/components/docs/tabs'

printf 'wrote %s\n' "$out"
ls -l "$out"
