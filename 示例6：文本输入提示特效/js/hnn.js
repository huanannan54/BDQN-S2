$(function(){
	//绑定失去焦点事件
	$("#email").blur(checkEmail);
	$("#pwd").blur(checkPass);
	$("#repwd").blur(checkRePss);
	$("#user").blur(checkUser);
	//表单提交事件
	$("#myform").submit(function(){	
		var resu=true;
		if(!checkEmail()) resu=false;
		if(!checkPass()) resu=false;
		if(!checkRePss()) resu=false;
		return resu;
	})
})
//验证邮箱
function checkEmail(){
	var email=$("#email");
	var divEamil=$("#DivEmail");
	divEamil.html("");
	if(email.val()==""){
		divEamil.html("Email不能为空");
		return false;
	}
	if(email.val().indexOf("@")==-1){
		divEamil.html("Email格式不正确,必须包含@");
		return false;
	}
	if(email.val().indexOf(".")==-1){
		divEamil.html("Email格式不正确,必须包含.");
		return false;
	}
	return true;
}
//验证密码
function checkPass(){
	var pwd=$("#pwd");
	var divpwd=$("#DivPwd");
	
	divpwd.html("");
	
	if(pwd.val()==""){
		divpwd.html("密码不能为空");
		return false;
	}
	
	if(pwd.val().length<6){
		divpwd.html("密码等于或大于6个字符");
		return false;
	}
	return true;
}
//验证重复密码
function checkRePss(){
	var pwd=$("#pwd");
	var repwd=$("#repwd");
	
	var divRePwd=$("#DivRepwd");
	divRePwd.html("");
	if(pwd.val() !=repwd.val()){
		divRePwd.html("两次密码不一致")
		return false;
	}
	return true;
}
//验证用户名
function checkUser(){
	var user=$("#user");
	var divUser=$("#DivUser");
	divUser.html("");
	if(user.val()==""){
		divUser.html("姓名不能为空");
		return false;
	}
	for (var i=0;i<user.val().length;i++) {
		var j=user.val().substring(i,i+1);
		if(j>=0){
			divUser.html("名字中不能包含数字");
			return false;
		}
		
	}
	return true;
}