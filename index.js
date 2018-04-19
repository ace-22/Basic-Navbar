$(document).ready(function(){

$("li").hide();
$("a").hover(function(){
	$(this).addClass("dsy");})
$("a").mouseout(function(){
	$(this).removeClass("dsy");})
$(".settings").click(function(){
	$("li").toggle();
	$("i").toggleClass("down up")
	
})		
})