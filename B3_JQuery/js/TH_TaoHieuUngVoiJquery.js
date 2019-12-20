$(document).ready(function() {
    $("#hide").click(function() {
        $("p").toggle();
    });
    $("#show").click(function() {
        $("p").show();
    });
});

$(document).ready(function() {
    $("button").click(function() {
        var div = $("div");
        div.animate({
            left: '200px',
            fontSize: '100px',
            width: '600px',
            height: '400px'
        }, "slow");
    });
});