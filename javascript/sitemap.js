$(document).ready(function() {
	var openSiteMapButton = $("div#sitemap > div.toggler")
	var siteMap = $("#sitemap");
	var isOpen = false;
	openSiteMapButton.click(function() {
		if (!isOpen) {
			siteMap.addClass("display", 100, "linear");
			siteMap.removeClass("hidden");
			$(".toggler > p.label").html("hide sitemap")
			isOpen = true;
		} else {
			siteMap.removeClass("display");
			$(".toggler > p.label").html("show sitemap")
			siteMap.addClass("hidden", 100, "linear");
			isOpen = false;
		}
	});
});