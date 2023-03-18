

// Check if the Battery Status API is supported
function BatteryOptimzer(){


  if ('getBattery' in navigator) {

    // Access the battery object
    navigator.getBattery().then(function(battery) {
  
      // Print the battery level
         
      //alert("Battery Level:: " + Math.round(battery.level * 100) + "%");
      if(Math.round(battery.level * 100)<10){
        alert("Battery Level:: " + Math.round(battery.level * 100) + "%")
        DarkMode()
        TextOnly()
      }
      battery.saverMode = true;
  
    });
  
  } else {
  alert("Battery Status API not supported");
  }
}