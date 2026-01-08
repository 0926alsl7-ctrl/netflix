$(".slide a").eq(0).show();
$(".slide a").eq(1).hide();
$(".slide a").eq(2).hide();

setInterval(function () {
  // fnfdto
  $(".slide a")
    .eq(0)
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo(".slide");
}, 3000);
// $(".bar").click(function () {
//   $(".bar span").eq(0).toggleClass("line1");
//   $(".bar span").eq(1).toggleClass("line2");
//   $(".bar span").eq(2).toggleClass("line3");
//   $(".wrap nav").toggleClass("bg");
//   $("nav ul").toggleClass("top");
//   $("header .wrap").toggleClass("logo2");
// });
