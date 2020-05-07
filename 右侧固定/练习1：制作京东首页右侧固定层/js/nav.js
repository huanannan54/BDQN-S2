$(function  () {
	$("#nav li span").mouseover(function  () {
		$(this).css("background-color","#C81623");
		//var index=$("#nav li span").index(this);
		//$("#nav li:eq("+index+") span~p").show();
		$(this).next("p").show();
	})
	$("#nav li span").mouseout(function  () {
		$(this).css("background-color","#7A6E6E");
		//var index=$("#nav li span").index(this);
		//$("#nav li:eq("+index+") span~p").hide();
		$(this).next("p").hide();
	})
})