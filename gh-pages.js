const ghpages = require("gh-pages");

ghpages.publish(
	"public", // path to public directory
	{
		branch: "gh-pages",
		repo: "https://github.com/elenals/coal-plant-afterlives", // point to your repo on GitHub
		user: {
			name: "Elena",
			email: "elenalingshao@gmail.com",
		},
		dotfiles: true,
	},
	() => {
		console.log("Deploy Complete!");
	}
);
