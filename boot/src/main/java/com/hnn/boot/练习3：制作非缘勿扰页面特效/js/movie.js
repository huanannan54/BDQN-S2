$(function (){
	$("dt").click(function  () {
		//单击标题"非诚勿扰",<dd>元素中有id属性的<span>的文本(主演.导演.标签.剧情)
		//颜色值为#ff0099.字体价粗显示
		$("dd span[id]").css({"color":"#ff0099","font-weigth":"bold"});
	});
	//单击文本  "导演",文字"赖水清"为加粗
  	$("#director").click(function  () {
		$("span[title='导演']").css("font-weight","bold");
	});
	//单击文本"标签",他之后的"苏有朋"和"2013"的背景颜色为#e0f8ea,字体颜色为#10 a14b,并且文字与背景颜色上下边缘距为2px,左右边距为8px
	$("#label").click(function  () {
		$("#label~span").css({"background":"#e0f8ea","color":"#10a14b","padding":"2px 8x"});
	});
	
	$("img[alt='收藏本片']").click(function  () {
		alert("您已收藏成功！");
	})
})