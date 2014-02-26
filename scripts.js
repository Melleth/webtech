function loadPage(page)
{
    $("Content").load("pages/" + page + ".html", function()
    {
        alert("page loaded");
    });
}