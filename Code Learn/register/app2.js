var $ = document
function cambiar_login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
document.querySelector('.cont_form_login').style.display = "block";
document.querySelector('.cont_form_sign_up').style.opacity = "0";               

setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
  
setTimeout(function(){    
document.querySelector('.cont_form_sign_up').style.display = "none";
},200);  
}

function cambiar_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
document.querySelector('.cont_form_login').style.opacity = "0";
  
setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
},100);  

setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
},400);  
}    

function ocultar_login_sign_up() {

document.querySelector('.cont_forms').className = "cont_forms";  
document.querySelector('.cont_form_sign_up').style.opacity = "0";               
document.querySelector('.cont_form_login').style.opacity = "0"; 

setTimeout(function(){
document.querySelector('.cont_form_sign_up').style.display = "none";
document.querySelector('.cont_form_login').style.display = "none";
},500);  
  
  }


$.querySelector('.reset').addEventListener('click' , ()=>{
  setTimeout(() => {
    history.go(0)
  }, 1100);
})

$.querySelector('.back').addEventListener('click' , function back(){
  history.back()
})
$.querySelector('.back-btn').addEventListener('click' , function back(){
  history.back()
})

$.querySelector('.btn-send').addEventListener('click' ,()=>{      //ورود
  var log_name= $.getElementById('log_name').value;
var log_pass  = $.getElementById('log_pass').value;

  if(log_name=='' || log_pass==''){
    $.querySelector('.er_login').hidden=false
    setTimeout(() => {
      $.querySelector('.er_login').hidden=true
    }, 3000);
  }else{
$.querySelector('.lop').hidden = false
  $.querySelector('.lop2').hidden = false
  $.querySelector('.lop3').hidden = false
  setTimeout(() => {
    $.querySelector('.all').style.filter = 'blur(6px)'
  $.querySelector('.back-btn').hidden = false
  }, 2000);

localStorage.setItem('user' , log_name)
  }
})

$.querySelector('.btn-send2').addEventListener('click' ,()=>{      //عضویت
  var sing_email = $.getElementById('sing_email').value;
  var sing_name = $.getElementById('sing_name').value;
  var sing_pass = $.getElementById('sing_pass').value;
  var sing_pass2 = $.getElementById('sing_pass2').value;

  if(sing_email=='' || sing_name=='' || sing_pass=='' || sing_pass2==''){
    $.querySelector('.er_sing').hidden=false
    setTimeout(() => {
      $.querySelector('.er_sing').hidden=true
    }, 3000);
  }else{
    $.querySelector('.lop').hidden = false
  $.querySelector('.lop2').hidden = false
  $.querySelector('.lop3').hidden = false
  setTimeout(() => {
    $.querySelector('.all').style.filter = 'blur(6px)'
  $.querySelector('.back-btn').hidden = false
  }, 2000);


  localStorage.setItem('user' , sing_name)
  }
})

$.addEventListener('mousemove' ,(event)=>{
  $.querySelector('.mose').style.top=  event.clientY +'px'
  $.querySelector('.mose').style.left=   event.clientX +'px'
})