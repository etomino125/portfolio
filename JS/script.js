$(function () {
  $(".btn-header-nav-list").on("click", function () {
    $("header nav").toggleClass("open"); // メニューにopenクラスをつけ外しする
  });
});

$(".btn-header-nav-list").click(function () {
  $(this).toggleClass("active");
});

window.addEventListener("scroll", function () {
  $(".fadein").each(function () {
    const elm = document.querySelector(".pagetop");
    const scroll = window.scrollY;
    if (scroll > 300) {
      elm.style.opacity = "1";
      elm.style.zIndex = "1";
    } else {
      elm.style.opacity = "0";
      elm.style.zIndex = "-1";
    }
  });
});

$(function () {
  $(".md_open").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      var target = $(this).data("target");
      var modal = document.getElementById(target);
      $(modal).find(".md_bg,.md_contents").fadeIn();
    });
  });
  $(".md_close").on("click", function () {
    $(".md_bg,.md_contents").fadeOut();
  });
  $(".close_btn").on("click", function () {
    $(".md_bg,.md_contents").fadeOut();
  });
});
