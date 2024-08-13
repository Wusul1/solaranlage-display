// ==UserScript==
// @name        sunnyportal.com Dashboard Redirect
// @namespace   Violentmonkey Scripts
// @match       https://www.sunnyportal.com/*ixed*ages/*o*an*ive.aspx*
// @grant       none
// @run-at      document-start
// @version     1.0
// @author      -
// @description Redirect from https://www.sunnyportal.com/FixedPages/HoManLive.aspx to https://www.sunnyportal.com/FixedPages/Dashboard.aspx
// ==/UserScript==
(function(){
  window.location.replace("https://www.sunnyportal.com/FixedPages/Dashboard.aspx")
})()
