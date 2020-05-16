$(document).ready(function() {
 $("#fname").blur(checkName);
 $("#pass").blur(checkPass);
 $("#rpass").blur(checkRpass);
 $("#email").blur(checkEmail);
 $("#lname").blur(checklName);
 $("#sname").blur(checksName);

 $("#formRegister").submit(function() {
  var resu = true;
  if(!checkName()) {
   resu = false;
  }
  if(!checkPass()) {
   resu = false;
  }
  if(!checkRpass()()) {
   resu = false;
  }
  if(!checkEmail()) {
   resu = false;
  }
  if(!checklName()) {
   resu == false;
  }
  if (!checksName()) {
   resu == false;
  }
  return resu;
 });

});

//验证名字
function checkName() {
 var $Name = $("#fname");
 var $divName = $("#DivFname");
 $divName.html("");
 if($Name.val() == "") {
  $divName.html("姓名不能为空！");
  return false;
 }

 for(var i = 0; i < $Name.val().length; i++) {
  var j = $Name.val().substring(i, i + 1);
  if(isNaN(j) == false) {
   $divName.html("名字不能包含数字！");
   return false;
  }
 }
 return true;
}

//验证姓氏
function checklName() {
 var $lName = $("#lname");
 var $divlName = $("#DivName");
 $divlName.html("");
 if($lName.val() == "") {
  $divlName.html("姓氏不能为空！");
  return false;
 }
 return true;
}

//验证用户名
function checksName() {
 var $sname = $("#sname");
 var $divsName = $("#DivsName");
 $divsName.html("");
 if($sname.val() == "") {
  $divsName.html("用户名不能为空！");
  return false;
 }
 return true;
}

//验证密码
function checkPass() {
 var $pass = $("#pass");
 var $divPass = $("#DivPwd");
 $divPass.html("");
 if($pass.val() == "") {
  $divPass.html("密码不能为空！");
  return false;
 }
 if($pass.val().length < 6) {
  $divPass.html("密码必须大于六位");
  return false;
 }
 return true;
}

//验证密码确认
function checkRpass() {
 var $pass = $("#pass");
 var $rPass = $("#rpass");
 var $divrPass = $("#DivRepwd");
 $divrPass.html("");
 if($rPass.val() == "") {
  $divrPass.html("密码不能为空！");
  return false;
 }
 if($pass.val() != $rPass.val()) {
  $divrPass.html("俩次输入的密码不一致！");
  return false;
 }
 return true;
}

//验证邮箱
function checkEmail() {
 var $email = $("#email");
 var $divEmail = $("#DivEmail");
 $divEmail.html("");
 if ($email.val() == "") {
  $divEmail.html("邮箱不能为空！");
  return false;
 }
 if($email.val().indexOf("@") == -1 || $email.val().indexOf(".") == -1) {
  $divEmail.html("邮箱里必须包含@和.");
  return false;
 }
 return true;
}