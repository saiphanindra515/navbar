$(document).ready(function(){
	$(".vertical").hide();
	$("#main").hide();
	$("#main").click(function(){
		$(".vertical").toggle();
	});
	if($(document).width()<="500")
	{
		$("#main").show();
		$(".hide1").hide();
	}
	$(window).resize(function(){
	
location.reload();	
    
	})
});