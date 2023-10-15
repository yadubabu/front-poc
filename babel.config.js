module.exports = {
	presets: [ "@babel/preset-env", "@babel/preset-react" ],

	transform: {
		"\\.[jt]sx?$": "babel-jest",
		"\\.css$": "some-css-transformer",
	  }
};