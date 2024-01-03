VERSION ?= 0.1.0

clean:
	rm -rf dist

change-version:
	sed -i -e "s/\"version\": \".*\"/\"version\": \"$(VERSION)\"/" src-tauri/tauri.conf.json

change-package-version:
	sed -i -e "s/\"version\": \".*\"/\"version\": \"$(VERSION)\"/" package.json

build-browser-extension: change-package-version
	pnpm build
	cd dist && zip -r ../chromium.zip .

