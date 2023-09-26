const { config } = require("@swc/core/spack")

module.exports = config({
	target: "browser",
	entry: {
		web: __dirname + "/src/main.ts"
	},
	output: {
		path: __dirname + "/dist",
		name: "main.js"
	},
})