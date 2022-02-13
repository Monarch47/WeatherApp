let myForm1 = document.querySelector(".my-form-1");
let areaName = document.querySelector(".area-name");
let weatherCondition = document.querySelector(".weather-condition");
let areaTemperatureValue = document.querySelector(".area-temperature-value");
let weatherCardContinaer = document.querySelector(".weather-card-container");
let weatherIconImage = document.querySelector(".weather-icon img");
let weatherCardImage = document.querySelector(".weather-card img");

let updateCity = async (cityName) => {
    // console.log(cityName);
    let cityDets = await getCity(cityName);
    let weatherDets = await getWeather(cityDets.Key);

    return {
        cityDets: cityDets,
        weatherDets: weatherDets
    };
};

let updateUI = (returnedData) => {
    cityDets = returnedData.cityDets;
    weatherDets = returnedData.weatherDets;

    areaName.innerHTML = `${cityDets.EnglishName}, ${cityDets.Country.EnglishName}`;
    weatherCondition.innerHTML = weatherDets.WeatherText;
    areaTemperatureValue.innerHTML = weatherDets.Temperature.Metric.Value;

    if (weatherCardContinaer.classList.contains("display-none-class")) {
        weatherCardContinaer.classList.remove("display-none-class");
    }

}

let updateImages = (returnedData) => {
    cityDets = returnedData.cityDets;
    weatherDets = returnedData.weatherDets;


    if (weatherDets.IsDayTime) {
        weatherCardImage.setAttribute("src", `img/day.svg`);
    }
    else {
        weatherCardImage.setAttribute("src", `img/night.svg`);
    }
    weatherIconImage.setAttribute("src", `icons/${weatherDets.WeatherIcon}.svg`);
}

myForm1.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityValue = myForm1.AreaName.value.trim();
    myForm1.reset();

    updateCity(cityValue)

        .then((data) => {
            console.log(data);
            updateUI(data);
            updateImages(data);
        })
        .catch((error) => console.log(error));

})