const path = require('path')
const config = require('../config')

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = require(path.resolve(__dirname, `${config.build.client.file}`));
} else {
	module.exports = require(path.resolve(__dirname, `${config.build.server.file}`));
}