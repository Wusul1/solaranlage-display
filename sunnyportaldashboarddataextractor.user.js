// ==UserScript==
// @name        sunnyportal.com Dashboard Data Extractor
// @namespace   Violentmonkey Scripts
// @match       https://www.sunnyportal.com/*ixed*ages/*ashboard.aspx*
// @grant       none
// @run-at      document-end
// @version     1.0
// @author      -
// @description Extracts Data from Sunnyportal Dashboard and sends them to a Web Server
// ==/UserScript==

(function(){
  var numberOfTimesDataWasExtracted = 0;
  batteryChargeLeftPercentElement = document.getElementsByClassName("batterySoc");
  if(batteryChargeLeftPercentElement.length == 0){
    return;
  }
  batteryChargeLeftPercentElement = batteryChargeLeftPercentElement[0];
  valueElements = document.getElementsByClassName("mainValueAmount");
  if(valueElements.length<3){
    return;
  }
  pvPowerWattageElement = valueElements[0];
  currentConsumptionElement = valueElements[1];
  batteryDischargeWattageElement = valueElements[2];

  setInterval(() => {
    numberOfTimesDataWasExtracted+=1
    let pvPowerWatts = pvPowerWattageElement.textContent;
    let powerConsumptionWatts = currentConsumptionElement.textContent
    let batteryDischargeWatts = batteryDischargeWattageElement.textContent
    let batteryChargeLeftPercent = batteryChargeLeftPercentElement.textContent.slice(0,-2)//remove " %" at the end of text
  }, 1000);
})();
