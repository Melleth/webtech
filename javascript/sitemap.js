$(document).ready(function() {
	var openSiteMapButton = $("div#sitemap > div.toggler")
	var siteMap = $("#sitemap");
	var isOpen = false;
	console.log(openSiteMapButton);
	openSiteMapButton.click(function() {
		console.log("click!");
		if (!isOpen) {
			siteMap.addClass("display", 100, "linear");
			siteMap.removeClass("hidden");
			isOpen = true;
		} else {
			siteMap.removeClass("display");
			siteMap.addClass("hidden", 100, "linear");
			isOpen = false;
		}
	});
});
function AppendNode(node) {
		var siteMap = $("#sitemap");
		var previousNodes = $("#sitemap > .node");
		console.log(previousNodes);
	}