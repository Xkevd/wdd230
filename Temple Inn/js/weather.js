//Day of the week
function setWeekday() {
  let date = new Date();
  let weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";
  let weekDay = weekdays[date.getDay()];
  document.querySelector("#dayOne").innerHTML = `${weekDay}`;
  //day 2
  let dayTwo = new Date(date)
  dayTwo.setDate(dayTwo.getDate() + 1)
  weekDay = weekdays[dayTwo.getDay()]
  document.querySelector("#dayTwo").innerHTML = `${weekDay}`;
  //day 3
  let dayThree = new Date(date)
  dayThree.setDate(dayThree.getDate() + 2)
  weekDay = weekdays[dayThree.getDay()]
  document.querySelector("#dayThree").innerHTML = `${weekDay}`;

}
setWeekday()

//Work with the API
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=-34.8335&lon=-56.1674&exclude=hourly&appid=66ebc759ac525615852406cc5e9884de&units=metric';
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

//Create the variables
const temperatureToday = document.querySelector("#temperature-now");
const temperatureTwo = document.querySelector("#temperature-day-one");
const temperatureThree = document.querySelector("#temperature-day-two");

const weatherIconToday = document.querySelector('#weather-now-icon');
const weatherIconTwo = document.querySelector('#weather-day-one-icon');
const weatherIconThree = document.querySelector('#weather-day-two-icon');

const captionDescriptionToday = document.querySelector('#weather-now');
const captionDescriptionTwo = document.querySelector('#weather-day-one');
const captionDescriptionThree = document.querySelector('#weather-day-two');

const humidityToday =document.querySelector('#humidity-today');
const humidityTwo =document.querySelector('#humidity-day-one');
const humidityThree =document.querySelector('#humidity-day-two');


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

//Capitalize Function
let wordsArray
function capitalize(words){
    let wordsArray = words.split(" ");
    for (let i = 0; i < wordsArray.length; i++) {
        wordsArray[i] = `${wordsArray[i].charAt(0).toUpperCase()}${wordsArray[i].slice(1).toLowerCase()}`;
  }
  return wordsArray.join(" ");
}

//Display Results
function displayResults(weatherData) {
  //Day one
  temperatureToday.textContent = `${weatherData.current.temp.toFixed(0)} °C`
  weatherIconToday.setAttribute('src', `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`)
  captionDescriptionToday.textContent = capitalize(weatherData.current.weather[0].description);
  humidityToday.textContent = `${weatherData.current.humidity}%`
  //Day two
  temperatureTwo.textContent = `${weatherData.daily[1].temp.day.toFixed(0)} °C`
  weatherIconTwo.setAttribute('src', `https://openweathermap.org/img/w/${weatherData.daily[1].weather[0].icon}.png`)
  captionDescriptionTwo.textContent = capitalize(weatherData.daily[1].weather[0].description);
  humidityTwo.textContent = `${weatherData.daily[1].humidity}%`
  //Day three
  temperatureThree.textContent = `${weatherData.daily[2].temp.day.toFixed(0)} °C`
  weatherIconThree.setAttribute('src', `https://openweathermap.org/img/w/${weatherData.daily[2].weather[0].icon}.png`)
  captionDescriptionThree.textContent = capitalize(weatherData.daily[2].weather[0].description);
  humidityThree.textContent = `${weatherData.daily[2].humidity}%`
}
apiFetch();