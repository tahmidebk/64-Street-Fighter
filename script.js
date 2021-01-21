$(".level1").click(function() {
    $(".game").css("background", "url(https://i.pinimg.com/originals/16/8f/33/168f33328213ef4b913675d3a4eefa11.gif)");
});

$(".start").click(function() {
    $(".game").fadeIn();
    $(".start-game").fadeOut();
});

$(".ryu").click(function() {
    $(".sprite").hide();
    $(".sprite-jab-attack").show();
});

$(".ryu").dblclick(function() {
    $(".sprite").hide();
    $(".sprite-jump-attack").show();
});

$(".ryu").hover(function() {
    $(".sprite-taunt").show();
});

$(".ryu").mouseleave(function() {
    $(".sprite-ready").show();
});

$(".level2").click(function() {
    $(".game").css("background", "url(https://i5.walmartimages.com/asr/808823e0-fbe6-477b-b3bc-83244a613036_1.a778a1b146bae57fa5b6b2d8d10c7e0e.jpeg");
});

$(".level3").click(function() {
    $(".game").css("background", "url(https://images-na.ssl-images-amazon.com/images/I/61Ut%2B8xNIPL._AC_SX450_.jpg");
});

$(".start").click(function() {
    $(".p1-name").text("Tahmid");
});

$(".start").click(function() {
    $(".p1-name").text("Tahmid");
});

$(".sprite-jump-attack").click(function() {
    $(".p1-health-progress").css("color", "yellow");
    $(".p1-health-progress").css("width", "50%");
});

$(".sprite-taunt").click(function() {
    $(".p1-health-progress").css("width", "100%");
    $(".p1-health-progress").css("color", "white");
});