const getHour = () => {
    const now = new Date();
    return now.getHours();
};

const retrieveHourlyData = (data) => {
    const actualHour = getHour();
    const arrayHour = data.forecastday[0].hour;

    const arrayFilter = arrayHour
        .filter((value) => {
            const now = new Date(value.time);
            return now.getHours() > actualHour;
        })
        .map((value) => {
            const pattern = /\d{2}:\d{2}/;
            value.time = pattern.exec(value.time).toString();
            return value;
        })
        .slice(0, 5);

    console.log(arrayFilter);

    return arrayFilter;
};

const retrieveDailyData = (data) => {
    const arrayFilter = data.forecastday.slice(1, data.forecastday.length);

    console.log(arrayFilter);

    return arrayFilter;
};

export default {
    retrieveHourlyData,
    retrieveDailyData,
};
