var temp= 17;
var wSpeed= 5;
var windChill= 13.12 + (0.6215 * temp) - (11.37 * (Math.pow(wSpeed, 0.16))) + (0.3965 * temp * (Math.pow(wSpeed, 0.16)));

var windChill= Math.round(windChill);
document.getElementById("windChill").innerHTML= `Wind Chill: ${windChill}°C `;
document.getElementById("windChill2").innerHTML= `Wind Chill: ${windChill}°C `;