$(document).ready(function() {
	var buttons = [];
	buttons = $(".topbar-element");
	console.log(buttons);
	buttons.each(function(index, button) {
		$(this).click(function() {
			var text = $(this).contents().filter(function() {
				return this.nodeType == 3;
			}).text().toLowerCase();
			loadPage(text);
		});
	});
});

function loadPage(page)
{
    $("div#content").slideUp();
    $("div#content").load("pages/" + page + ".html", function()
    {
        $("div#content").slideDown();
    });
}

