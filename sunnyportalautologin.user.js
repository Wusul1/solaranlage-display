// ==UserScript==
// @name        sunnyportal.com Auto Login
// @namespace   Violentmonkey Scripts
// @match       https://www.sunnyportal.com/Templates/Start.aspx*
// @match       https://www.sunnyportal.com/Templates/Login.aspx*
// @grant       none
// @run-at      document-end
// @version     1.0
// @author      -
// @description Automatically logs into sunnyportal.com with a configurable username/password
// ==/UserScript==
(function(){
  var username = "<username>";
  var password = "<password>";
  var checkRememberLogin = false;
  var userNameField = document.getElementById("txtUserName");
  var passwordField = document.getElementById("txtPassword");
  var rememberLoginCheckbox = document.getElementById("ctl00_ContentPlaceHolder1_Logincontrol1_MemorizePassword");
  if(!rememberLoginCheckbox){
      rememberLoginCheckbox = document.getElementById("ctl00_ContentPlaceHolder1_LoginControl1_MemorizePassword"); //other login page has one more uppercase letter within checkbox id
  }
  var loginButton = document.getElementById("ctl00_ContentPlaceHolder1_Logincontrol1_LoginBtn");
  if(!loginButton){
    loginButton = document.getElementById("ctl00_ContentPlaceHolder1_LoginControl1_LoginBtn"); //same thing here
  }
  if (!userNameField||!passwordField||!loginButton||(!rememberLoginCheckbox&&checkRememberLogin)){
    console.log("Required Element was not found.");
    return;
  }else{
    userNameField.value = username;
    passwordField.value = password;
    rememberLoginCheckbox.checked = checkRememberLogin;
    loginButton.click();
  }
})();
