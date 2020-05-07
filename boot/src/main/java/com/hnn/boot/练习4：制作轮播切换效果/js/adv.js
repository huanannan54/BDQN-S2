$(function  () {
	$(".adver").mouseover(function  () {
		$(".arrowLeft").show();
		$(".arrowRight").show();
	}).mouseout(function  () {
		$(".arrowLeft").hide();
		$(".arrowRight").hide();
	});
	var index=0;
	var imgs=new Array("adver01.jpg","adver02.jpg","adver03.jpg","adver04.jpg","adver05.jpg","adver06.jpg");
	//点击左箭头
	$(".arrowLeft").click(function  () {
		if (index==0) {
			alert("已经是第一张图片了");
			return;
		}
		index--;
		$(".adver").css("background","url(images/"+imgs[index]+")");
		var num=index+1;
		$(".adver li:nth-of-type("+num+")").css("background","orange");
		$(".adver li:nth-of-type("+num+")").siblings().css("background","#333333");
	});
	//点击右箭头
	$(".arrowRight").click(function  () {
		if (index==imgs.length-1) {
			alert("已经是最后一张图片了");
			return;
		}
		index++;
		$(".adver").css("background","url(images/"+imgs[index]+")");
		var num=index+1;
		$(".adver li:nth-of-type("+num+")").css("background","orange");
		$(".adver li:nth-of-type("+num+")").siblings().css("background","#333333");
	});
})