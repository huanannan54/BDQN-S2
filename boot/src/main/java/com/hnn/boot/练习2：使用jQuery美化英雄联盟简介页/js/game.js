$(function  () {
	$("p").click(function  () {
		//单击p元素后，设置class为txt_box的元素内class 为current的元素的背景颜色为#6ff；
		$(".txt_box .current").css("background","#6ff");
		//<p>的子元素<span>的背景颜色为#f9f，
		$("p>span").css("background","#f9f");
		//紧邻<h1>后的<p>元素的背景颜色为#FF6,
		$("h1+p").css("background","#ff6");
		//"即时即战"文本颜色为#FFF，背景颜色为#f00
		$("#content span span").css({"color":"#fff","background":"#f00"});
	})
	//紧邻<h1>
	
	
})