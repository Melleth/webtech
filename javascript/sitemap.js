$(document).ready(function() {
	//Wire functionality to the sitemap links.
	var links = [];
	links = $("#sitemap > .node");
	links.each(function(index, link) {
		$(this).click(function() {
			var text = $(this).contents().filter(function() {
				return this.nodeType == 3;
			}).text().toLowerCase();
			loadPage(text);
		});
	});

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