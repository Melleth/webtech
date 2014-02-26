$(document).ready(function () {
    $("div.expandable").slideUp();
    $("div.expandable").click(function() {
        $("div.expandable").toggleSlide();
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
