
const temperature = document.getElementById("temperature");
const windSpeed = document.getElementById("speed");
const windChillElement = document.getElementById("chill");

//Working with the API
const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=-34.9&lon=-56.1&exclude=hourly,daily&appid=66ebc759ac525615852406cc5e9884de';
const weatherIcon = document.querySelector('#temp-icon');
const captionDesc = document.querySelector('#weather-fig');

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

let wordsArray
function capitalize(words){
    let wordsArray = words.split(" ");
    for (let i = 0; i < wordsArray.length; i++) {
        wordsArray[i] = `${wordsArray[i].charAt(0).toUpperCase()}${wordsArray[i].slice(1).toLowerCase()}`;
  }
  return wordsArray.join(" ");
}
function displayResults(weatherData) {
  temperature.textContent = `${weatherData.main.temp.toFixed(0)}`;
  windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(0)}`;
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = capitalize(desc);
  
}
apiFetch();