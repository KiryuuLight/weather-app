const locationHtml = (region, country) => {
    const HTML = `
            <div class="name-location">
                <p class="country-city">${region} , ${country}</p>
            </div>
        `;
    return HTML;
};

const temperatureHtml = (img, temp) => {
    const HTML = `
        <div class="temperature-card">
            <img src="${img}" alt="" srcset="">
            <p class="temperature" id="temp">${temp}°</p>
            <div class="scale">
                <button class="btn" id="btnCelsius">C</button>
                <button class="btn not-selected" id="btnFahrenheit">F</button>
            </div>
        </div>
        `;
    return HTML;
};

const conditionHtml = (text) => {
    const HTML = `
            <div class="name-condition">
                <p class="condition">${text}</p>
            </div>
        `;
    return HTML;
};

const lastUpdatedHtml = (lastUpdated) => {
    const HTML = `
            <div class="name-updated">
            <p class="last-updated">Updated as of ${lastUpdated}</p>
            </div>
        `;
    return HTML;
};

const moreInfoHtml = (dataInfo) => {
    const HTML = `
            <div class="more-information">
                <p>Humidity ${dataInfo.humidity}</p>
                <p id="feelsLike">Feels like ${dataInfo.feelslike_c}°</p>
                <p>Wind ${dataInfo.gust_mph}km/h</p>
                <p>Wind direction ${dataInfo.wind_dir}</p>
                <p>Visibility ${dataInfo.vis_km} km</p>
                <p>Precipitation ${dataInfo.precip_in} in</p>
            </div>
        `;
    return HTML;
};

const forecastMenuHtml = () => {
    const HTML = `
            <div class="forecast">
                <div class="select-buttons">
                    <button class="btn" id="btnDaily">Daily</button>
                    <button class="btn not-selected" id="btnHourly">Hourly</button>
                </div>
            </div>
            
            <div class="forecast-information" id="daily">
            </div>

            <div class="forecast-information" id="hourly">
            </div>
            `;
    return HTML;
};

const forecastHourlyHtml = (hourlyInfo) => {
    const HTML = `
            <div class="forecast-card">
                <p class="p-30">${hourlyInfo.time}</p>
                <img class="icon-forecast" src="${hourlyInfo.condition.icon}">
                <p class="p-40">${hourlyInfo.temp_c}°C</p>
                <p class="p-20">${hourlyInfo.condition.text}</p>
            </div>`;
    return HTML;
};

const forecastDailyHtml = (dailyInfo) => {
    const HTML = `
            <div class="forecast-card">
                <p class="p-30">${dailyInfo.date}</p>
                <img class="icon-forecast" src="${dailyInfo.day.condition.icon}" alt="" srcset="">
                <p class="p-40">${dailyInfo.day.avgtemp_c}°C</p>
                <p class="p-20">${dailyInfo.day.condition.text}</p>
            </div>`;
    return HTML;
};

const errorMessageHTML = () => {
    const HTML = `
            <div class="error">
                <img src="img/emoji-sad.svg" alt="" srcset="">
                <p>Not found</p>
            </div>`;
    return HTML;
};

export default {
    locationHtml,
    temperatureHtml,
    conditionHtml,
    lastUpdatedHtml,
    moreInfoHtml,
    forecastMenuHtml,
    forecastHourlyHtml,
    forecastDailyHtml,
    errorMessageHTML,
};
