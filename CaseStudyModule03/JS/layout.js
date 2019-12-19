$("document").ready(function() {
    $(".navbar-brand img").on({
        mouseenter: (function() {
            $(this).animate({
                height: '85px',
                width: '160px'
            });
        }),
        mouseleave: (function() {
            $(this).animate({
                height: '75px',
                width: '150px'
            });
        })
    })
});
$("document").ready(function() {
    $(".carousel-control-next").click(function() {
        $(".carousel-control-prev").animate({
            width: '+700px',
        }, "slow")
        $(".carousel-control-prev").animate({
            width: '7%',
        }, "slow")
    })
    $(".carousel-control-prev").click(function() {
        $(".carousel-control-next").animate({
            width: '70%',
        }, "slow")
        $(".carousel-control-next").animate({
            width: '7%',
        }, "slow")
    })
});