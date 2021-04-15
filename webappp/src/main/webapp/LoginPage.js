/**
 * 
 */
/**
 * 
 */

var name=document.forms['form']['username'];
var pass=document.forms['form']['password'];

function cheackUsernameANDpassword(){
	
	if(name.value!="mirko" || pass.value!="mirko0011"){
	alert("Username or password is not correct!");
		}
}


function call(){
cheackUsernameANDpassword();
}
