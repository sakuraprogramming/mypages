$(function () {
    let i = 1;
    setInterval(() => {
        let a = $("#img");
        let path = "../images/index4-img/index4-" + i + ".jpg";
        a.attr('src', path);
        i++;
        if (i > 4) {
            i = 1;
        }
    }, 1000)

})