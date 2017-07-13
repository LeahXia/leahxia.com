$(function(){
  $(".portfolio-list .site-img").hover(function(e){
    var caption = $(this).find(".caption");
    caption.css("height", "100%");

    var captionDetail = caption.find(".detail");
    captionDetail.toggleClass("hide");

    var event = e || window.event;

    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  });

  $(".portfolio-list .site-img").on("mouseleave", hideDetail);

  function hideDetail(){
    var caption = $(this).find(".caption");
    caption.css("height", "28%");
  };











});
