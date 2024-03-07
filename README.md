<h1 align="center">Readog is browser extension that can save your link to any platform</h1>

https://github.com/godruoyi/readog/assets/16079222/a1fd44a0-90d0-44e5-95d0-f1381131833f

## Description

Readog allows you to save links with a single click to any platform that support Open API. 
Currently, it supports Telegram and Bookmark, we are plans for additional more support in the future, PR/Issue are welcome.

## Features

- [x] 🌰 Click once and save to any platform
- [x] 🌰 Support browser Bookmark
- [x] 🍏 Support Telegram
- [x] 🐛 Support Bear
- [x] 🐕‍🦺 Support Obsidian
- [ ] 🚧 Support Notion
- [ ] 🚧 Support Flomo

## Installation

### Install Manually

1. Download readog-chrome-extension-{version}.zip from [Latest Release](https://github.com/godruoyi/readog/releases)
2. Unzip it
3. Open the Extension page of Chrome & Arc browsers
4. Enable `Developer mode` and click `Load unpacked` button to import Readog
5. Configure the service provider you want to save data(tg, bookmark, bear, etc.)
6. Enjoy.

![Chrome Extension](https://github.com/godruoyi/readog/assets/16079222/c1022503-9bb9-4ab3-b31d-37c331238b56)

### Install from source code

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Build the extension: `pnpm build`
4. Open Chrome Developer Tools and load the extension from the `dist` directory

## Development

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Run the development server: `pnpm dev`
4. Open Chrome Developer Tools and load the extension from the `dist` directory
5. Make changes to the code and the extension will be reloaded automatically

## License
MIT
