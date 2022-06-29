const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=66ebc759ac525615852406cc5e9884de&units=imperial';

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

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = capitalize(desc);

}

let wordsArray
function capitalize(words){
    let wordsArray = words.split(" ");
    for (let i = 0; i < wordsArray.length; i++) {
        wordsArray[i] = `${wordsArray[i].charAt(0).toUpperCase()}${wordsArray[i].slice(1).toLowerCase()}`;
  }
  return wordsArray.join(" ");
}

apiFetch();

let credits = document.createElement("a");
credits.textContent = `Thanks to openweathermap.org for providing their free API for the weather`
const footer = document.querySelector("footer");
credits.href = "https://openweathermap.org/"
credits.style.display = "block";
credits.style.textAlign = "center";
footer.appendChild(credits);
