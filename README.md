# Auto Scroll Facebook Reels

Auto-scrolls to the next Facebook Reel when the current video ends.

Single-codebase, no build step.

## Features

- Detects Reel completion via `video` `ended` event.
- Clicks next-reel control automatically.
- Handles Facebook SPA updates with `MutationObserver`.
- Includes selector fallbacks for minor UI/label changes.

## Browser Support

- Chrome / Chromium
- Firefox

## Install (no build)

Use this same folder directly in both browsers.

### Chrome

1. Open `chrome://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select this repo folder (`fb-reels-auto-scroll`)

### Firefox

1. Open `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on**
3. Select `manifest.json` from this folder

## Edit-in-place workflow

- Edit `contentScript.js` / `background.js` directly.
- Reload the extension in browser to pick up changes.
- No transpile, no bundling, no copy step.

## Project Files

- `manifest.json` — single manifest for Chrome + Firefox
- `contentScript.js` — core reel detection/auto-next logic
- `background.js` — install lifecycle hook (`browser`/`chrome` compatible)
- `popup.html` — simple informational popup

## Notes

- Facebook UI can change; update selectors in `contentScript.js` if needed.
- Permissions are intentionally minimal.

## License

MIT
