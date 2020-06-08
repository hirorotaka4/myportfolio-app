$(function () {
  $(".signUp-show").click(function () {
    $("#newList-modal").fadeIn();
  });
  $(".close-modal").click(function () {
    $("#newList-modal").fadeOut();
  });
  $(".addCard_link").hover(
    function () {
      $(this).animate(
        {
          "font-size": "30px",
        },
        200
      );
    },
    function () {
      $(this).animate(
        {
          "font-size": "24px",
        },
        200
      );
    }
  );

  $(".listIcon,.addCard a").hover(
    function () {
      $(this).css("color", "red");
    },
    function () {
      $(this).css("color", "#8c8c8c");
    }
  );
});
