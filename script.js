$(function() {
    document.querySelector("title");
    document.getElementsByTagName("title")[0]
    $("#resume").find('.print').on('click', function() {
        $("#resume").print({  
            title: false,
            doctype: '<!doctype html>'
        });
    });
});