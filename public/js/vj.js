$(function(){	
	$(window).scroll(function() {
		var s=$(window).scrollTop();
		if(s < 90){
			$(".nav1").removeClass("fixedNav");
			$(".nav1").fadeIn(0);
		}else if(s < 95){
			$(".nav1").fadeOut(0);	
		}else{
			$(".nav1").fadeIn(2000);
			$(".nav1").addClass("fixedNav");
		}
	});
});
function f(){
		$(".wxf").toggle();
	}
	function closeBox(){
	$(".wxf").css("display","none");
}
