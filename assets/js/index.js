(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let countDownDate = new Date().getTime() + 15 * day;

  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    let remainingDays = Math.floor(distance / day);
    let remainingHours = Math.floor((distance % day) / hour);
    let remainingMinutes = Math.floor((distance % hour) / minute);
    let remainingSeconds = Math.floor((distance % minute) / second);

    document.getElementById("days").innerText =
      remainingDays < 10 ? "0" + remainingDays : remainingDays;
    document.getElementById("hours").innerText =
      remainingHours < 10 ? "0" + remainingHours : remainingHours;
    document.getElementById("minutes").innerText =
      remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;
    document.getElementById("seconds").innerText =
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    if (distance < 0) {
      document.getElementById("headline").innerText = "It's my birthday!";
      document.getElementById("countdown").style.display = "none";
      document.getElementById("content").style.display = "block";
      clearInterval(x);
    }
  }, 0);
})();

$(document).ready(function () {
  var sliderFor = $(".slider-for");
  var sliderNav = $(".slider-nav");

  function initSliders() {
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav",
    });

    $(".slider-nav").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: false,
      focusOnSelect: true,
    });
  }

  function setOpacity() {
    sliderNav.find(".slick-slide").css("opacity", 0.5);
    sliderNav.find(".slick-current").css("opacity", 1);
  }

  $("#stat").on("shown.bs.modal", function () {
    initSliders();
    setOpacity();
  });
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});
