$(document).ready(function() {
	/*
	** Wire click listeners to our topbar buttons here.
	*/
    //menu buttons functionality
	var buttons = [];
	//get the 
	buttons = $(".topbar-element");
	buttons.each(function(index, button) {
		$(this).click(function() {
			var text = $(this).contents().filter(function() {
				return this.nodeType == 3;
			}).text().toLowerCase();
			loadPage(text);
		});
	});
});



function updateExpandables()
{
    //expandable content block
    var expandables = [];
    expandables = $("div.expandable");
    expandables.each(function(index, block){
        main = $(this)
        main.prepend("<div class=\"expandableTopbar\" id=\"" + main.attr("id") + "\"><b>" + main.attr("id") + "</b> - <u>Click here to expand/collapse</u></div>");
        var topbar = $(this).find(("div.expandableTopbar#" + main.attr("id")));
        topbar.click(function() {
        mainBlock = $("div.expandable#" + topbar.attr("id"));
            if(mainBlock.css("height") != "30px")
            {
                mainBlock.animate( { height:"30px" }, "slow");
            }
            else
            {
                mainBlock.animate( { height:"100%" }, "slow");
            }
        });
    });
}

function loadPage(page)
{
    $("div#content").slideUp();
    $("div#content").load("pages/" + page + ".html", function()
    {
        $("div#content").slideDown();
        updateExpandables();
    });
}

