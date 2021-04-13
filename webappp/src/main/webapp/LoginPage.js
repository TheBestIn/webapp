/**
 * 
 */
/**
 * 
 */

var name=document.forms['form']['username'];
var pass=document.forms['form']['password'];

function cheackUsername(){
	
	if(name.value=="mirko" || pass.value=="mirko0011" ){
		alert("Data wasss correect!");
		
	}else{
		alert("incorrect data!");
	}
}

function cheackPassword(){
	
	if(pass.value=="mirko0011" ){
		alert("Password wass correect!");
		
	}else{
		alert("incorrect password!");
	}
	
}
function call(){
	cheackUsername();
	cheackPassword();
}