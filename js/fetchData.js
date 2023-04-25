const fetchConfig = () => {
    const API_KEY = '902369fce1a44f6d9b310423231604';
    return API_KEY;
};

const fetchToAPI = async (location) => {
    const API_KEY = fetchConfig();
    const request = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=6&aqi=no&alerts=no`,
        {
            mode: 'cors',
        }
    );

    const data = await request.json();
    return data;
};

export default {
    fetchToAPI,
};
