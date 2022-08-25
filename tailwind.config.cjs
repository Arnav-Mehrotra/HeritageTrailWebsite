const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors:{
				MarginPrimaryGreen: "#043402",
				TextPrimary: "#adc8ac",
				BackgroundColor: "#011301",
				MarginSeccondaryGreen: "#320234",
				TextSeccondary: "#c7acc8",
				BackgroundBlack: "#000",
				Highlight: "#52fba1",
				DarkHighlight: "#318d5c"
			}
		}
	},

	plugins: []
};

module.exports = config;
