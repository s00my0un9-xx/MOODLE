$(function () {
    // lnb menu list
    $(".lnb__menu a").on("mouseenter focus", function () {
        const select = $(this).data("select");
        $(".recommend").removeClass("on");
        $("." + select).addClass("on");

        $(".lnb__menu a").removeClass("on");
        $(this).addClass("on");
    });
});