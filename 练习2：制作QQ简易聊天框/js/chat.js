$(function  () {
	var uName=new Array("时尚伊人","六月奇迹","松松");
	//定义一个图片按钮
	var imgs=new Array("head01.jpg","head02.jpg","head03.jpg");
	//发送消息按钮
	$("#send").click(function  () {
		var str=$(".chatBody").html();
		//定义一个随机下标
		var iNum=Math.floor(Math.random()*(3-0)+0)
		//设置头像
		var headStr="<div><img src=images/"+imgs[iNum]+"/></div>";
		//设置昵称
		var userName="<p>"+uName[iNum]+"</p>";
		//设置聊天内容
		var chatStr="<div>"+$(".chatText").val()+"</div>";
		//需要把上面的内容全部汇总在一起
		var currenStr="<section>"+headStr+userName+chatStr+"</section>";
		//把汇总的内容添加到聊天框中
		$(".chatBody").html(str+currenStr);
	})
})