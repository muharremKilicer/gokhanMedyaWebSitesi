$('.carousel').carousel({
  interval: 5000,
  pause: false
});

$(function() {
		var selectedClass = "";
		$("p").click(function(){
		selectedClass = $(this).attr("data-rel");
    $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio .col-sm-3").not("."+selectedClass).fadeOut();
    setTimeout(function() {
      $("."+selectedClass).fadeIn();
      $("#portfolio").fadeTo(500, 1);
    }, 500);
		
	});
});