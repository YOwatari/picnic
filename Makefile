NPM=npm
GULP_DIR=./gulp
GULP_BIN=../node_modules/.bin/gulp
ELECTRON_BIN=./node_modules/.bin/electron

clean:
	rm -rf ./dest/js ./src/js ./src/typings

setup: clean
	rm ./node_modules
	$(NPM) install

build: clean
	cd $(GULP_DIR) && $(GULP_BIN) build

watch:
	cd $(GULP_DIR) && $(GULP_BIN) watch

run:
	$(ELECTRON_BIN) .
