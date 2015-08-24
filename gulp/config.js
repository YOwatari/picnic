var dest = '../dest';
var src = '../src';
var path = require('path');
var relativeSrc = path.relative('.', src);

module.exports = {
    // 0. *.d.ts save to...
    tsd: {
        json: src + '/tsd.json'
    },

    // 1. typescript building
    ts: {
        src: [
            src + '/ts/*.ts',
        ],
        dest: src + '/js/es6',
        options: {
            noImplicitAny: true,
            target: 'ES6',
        }
    },

    // 2. ES6 to ES5
    babel: {
        src: [
            src + '/js/es6/*.js'
        ],
        dest: src + '/js/babel',
    },

    // 3. minify targets
    minify: {
        src: src + '/js/babel/*.js',
        dest: dest + '/js',
    },

    // watching
    watch: {
        ts: relativeSrc + '/ts/*.ts',
        js: relativeSrc + '/js/*.js',
    }
}
