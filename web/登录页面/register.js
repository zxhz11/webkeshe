function mycheck()
	{
		var a=document.getElementById("username").value;
		var b=document.getElementById("pwd").value;
		if(a.length==0){
			alert("用户名不能为空！！");
			return false;
		}
		if(b.length<6){
			alert("密码不少于6位");
			return false;
		}
		return true;
	}
function myreset()
	{
		if(confirm("是否重置"))
			return true;
		else
			return false;
	}