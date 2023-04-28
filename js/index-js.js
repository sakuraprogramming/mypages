$(function () {
    (function () {
        let a = $("#first");
        a.addClass("focus");
        $("#one").show().siblings().hide();
    })();
    $("#btn").click(function () {
        alert("谢谢你的肯定!");
    });
    $("#first").click(function () {
        let a = $("#first");
        a.addClass("focus").siblings().removeClass("focus");
        $("#one").show().siblings().hide();
    })
    $("#second").click(function () {
        let b = $("#second");
        b.addClass("focus").siblings().removeClass("focus");
        $("#two").show().siblings().hide();
    })
    $("#third").click(function () {
        let c = $("#third");
        c.addClass("focus").siblings().removeClass("focus");
        $("#three").show().siblings().hide();
    })
    $("#fourth").click(function () {
        let d = $("#fourth");
        d.addClass("focus").siblings().removeClass("focus");
        $("#four").show().siblings().hide();
    })
    $("#fifth").click(function () {
        let e = $("#fifth");
        e.addClass("focus").siblings().removeClass("focus");
        $("#five").show().siblings().hide();
    })
})