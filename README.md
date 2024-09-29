# Auto Scroll Facebook Reels

**Auto Scroll Facebook Reels** is a Chrome extension that automatically scrolls to the next Facebook Reel when the current one finishes playing. It enhances your Facebook Reels experience by removing the need to manually scroll to the next reel.

## Features

- Automatically detects when a Facebook Reel ends.
- Scrolls down to the next Reel once the current one finishes.
- Works seamlessly with the Facebook web interface.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the folder where the extension files are located.
5. The extension will now be loaded into Chrome, and you can start using it on Facebook.

## Usage

1. Navigate to Facebook and open any reel.
2. The extension will automatically scroll to the next reel once the current one finishes playing.

## Files

- **manifest.json**: Defines the extension's settings and permissions.
- **background.js**: Background script for future features (currently not used).
- **contentScript.js**: The core script that detects reel ending and triggers scrolling.
- **popup.html**: Simple popup interface (optional).

## Future Enhancements

- Add support for auto-pausing.
- Implement a toggle to enable or disable auto-scrolling.
- Improve scroll behavior for smoother transitions.

## Contributing

Feel free to contribute by submitting pull requests or reporting issues!

## License

This project is licensed under the MIT License.
