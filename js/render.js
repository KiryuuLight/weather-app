import htmlComponents from './components.js';
import handleDate from './handleDate.js';

const renderLocation = (data) => {
    const { country, region } = data.location;
    const dataLocation = htmlComponents.locationHtml(region, country);
    return dataLocation;
};

const renderTemperature = (data) => {
    const {
        condition: { icon },
        temp_c,
    } = data.current;
    const dataTemperature = htmlComponents.temperatureHtml(icon, temp_c);
    return dataTemperature;
};

const renderCondition = (data) => {
    const {
        condition: { text },
    } = data.current;
    const dataCondition = htmlComponents.conditionHtml(text);
    return dataCondition;
};

const renderLastUpdated = (data) => {
    const { last_updated } = data.current;
    const dataUpdated = htmlComponents.lastUpdatedHtml(last_updated);
    return dataUpdated;
};

const renderMoreInfo = (data) => {
    const { humidity, feelslike_c, gust_mph, wind_dir, vis_km, precip_in } =
        data.current;
    const dataMoreInfo = htmlComponents.moreInfoHtml({
        humidity,
        feelslike_c,
        gust_mph,
        wind_dir,
        vis_km,
        precip_in,
    });
    return dataMoreInfo;
};

const renderForecastMenu = htmlComponents.forecastMenuHtml();

const renderForecastHourly = (data) => {
    const forecastHourly = handleDate.retrieveHourlyData(data.forecast);

    const forecastListHourly = generateListHtml(
        forecastHourly,
        htmlComponents.forecastHourlyHtml
    );

    return forecastListHourly;
};

const renderForecastDaily = (data) => {
    const forecastDaily = handleDate.retrieveDailyData(data.forecast);

    console.log(forecastDaily);

    const forecastListDaily = generateListHtml(
        forecastDaily,
        htmlComponents.forecastDailyHtml
    );

    return forecastListDaily;
};

const renderError = () => {
    const errorMessage = htmlComponents.errorMessageHTML();
    setDataOnParent('.weather-information', errorMessage);
};

const renderData = (data) => {
    const htmlData = `
    ${renderLocation(data)}
    ${renderTemperature(data)}
    ${renderCondition(data)}
    ${renderLastUpdated(data)}
    ${renderMoreInfo(data)}
    ${renderForecastMenu}
    `;

    const forecastListHourly = `${renderForecastHourly(data)}`;
    const forecastListDaily = `${renderForecastDaily(data)}`;

    setDataOnParent('.weather-information', htmlData);
    setDataOnParent('#hourly', forecastListHourly);
    setDataOnParent('#daily', forecastListDaily);
};

const updateScale = (data, scale) => {
    const { temp_c, feelslike_c, temp_f, feelslike_f } = data.current;

    const feelsLike = document.getElementById('feelsLike');
    const temp = document.getElementById('temp');
    if (scale === 'f') {
        temp.innerText = `${temp_f}°F`;
        feelsLike.innerText = `Feels like ${feelslike_f}°F`;
        return;
    }

    temp.innerText = `${temp_c}°C`;
    feelsLike.innerText = `Feels like ${feelslike_c}°C`;
};

const generateListHtml = (arr, fn) => {
    const listHtml = arr.map((value) => fn(value)).join(' ');
    return listHtml;
};

const setDataOnParent = (parentName, html) => {
    const parentClass = document.querySelector(`${parentName}`);
    parentClass.innerHTML = html;
};

export default {
    renderData,
    renderError,
    updateScale,
};
