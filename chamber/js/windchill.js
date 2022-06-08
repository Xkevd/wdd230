/*Temperatures*/
const temperature = parseInt(document.getElementById("temperature").textContent);
const fahrenheit = (temperature * 1.8) + 32;
/*Wind*/
const windSpeed = parseFloat(document.getElementById("speed").textContent);
const speedMph = windSpeed * 0.609344;
const windChillElement = document.getElementById("chill");


const windChill = (fahrenheit, speedMph) =>{
   return (35.74 + (0.6215 * fahrenheit) - (35.75 * (speedMph ** 0.16)) + (0.4275 * (fahrenheit * (speedMph ** 0.16))))};


if (fahrenheit <= 50 && speedMph > 3.0) {
  let windChillCel = (windChill(fahrenheit, speedMph)-32)*0.6;
  windChillElement.textContent = parseInt(windChillCel) + "°C";
} else {
  windChillElement.textContent = "N/A";
}