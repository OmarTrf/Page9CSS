$(function(){
	$(window).scroll(function(){
		var scroll = $(this).scrollTop();
		if(scroll > 200){
			$('#hed').slideDown();
		}else{
			$('#hed').slideUp();
		}
	});
	
});