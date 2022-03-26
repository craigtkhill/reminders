const d = new Date();
const day = d.getDay();

console.log(day);

if (!day in [1, 2, 3, 4, 5]) {
  $(".weekdays").hide();
}

if (day in [1, 4]) {
  $(".mon-thur").hide();
}

if (day !== 0) {
  $(".sunday").hide();
}

if (day !== 1) {
  $(".monday").hide();
}

if (day !== 2) {
  $(".tuesday").hide();
}

if (day !== 3) {
  $(".wednesday").hide();
}

if (day !== 4) {
  $(".thursday").hide();
}

if (day !== 5) {
  $(".friday").hide();
}

if (day !== 6) {
  $(".saturday").hide();
}

$(".click-hide").click(function () {
  $(this).hide("slow", "swing");
});
