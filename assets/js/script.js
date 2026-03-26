$(function () {
    // lnb menu down
    $(".gnb__browse").on('mouseenter', function () {
        $(".lnb").stop().slideDown();
    })

    $(".lnb, .header").on('mouseleave', function () {
        $(".lnb").stop().slideUp();
    })

    $(".gnb__browse").on("mouseenter focus", function () {
        $(".lnb").addClass("open");
        $(this).addClass("on");
    });
    
    $(".lnb").on("mouseleave", function () {
        $(".lnb").removeClass("open");
        $(".gnb__browse").removeClass("on");
    });

    // lnb menu content
    $(".lnb__menu a").on('mouseenter focus', function () {
        const select = $(this).data("select");
        $(".recommend").removeClass("on");
        $("." + select).addClass("on");

        $(".lnb__menu a").removeClass("on");
        $(this).addClass("on");
    });

});