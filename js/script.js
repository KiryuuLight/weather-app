import render from './render.js';
import fetch from './fetchData.js';

// Initialize events

const handleSearchEvent = () => {
    const btnSearchInput = document.getElementById('btnSearchInput');
    btnSearchInput.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
            const inputUser = e.currentTarget.value;
            const data = fetch.fetchToAPI(inputUser);
            data.then((value) => {
                retrieveData(value);
                handleChangeTempEvent(value);
                handleChangeZone();
            }).catch((err) => {
                render.renderError();
            });
        }
    });
};

const handleChangeTempEvent = (data) => {
    const btnCelsius = document.getElementById('btnCelsius');
    const btnFahrenheit = document.getElementById('btnFahrenheit');

    btnCelsius.addEventListener('click', () => {
        handleClick(btnCelsius, btnFahrenheit);
        render.updateScale(data, 'c');
    });

    btnFahrenheit.addEventListener('click', () => {
        handleClick(btnFahrenheit, btnCelsius);
        render.updateScale(data, 'f');
    });
};

const handleClick = (elementSelected, actualElement) => {
    if (elementSelected.classList.contains('not-selected')) {
        elementSelected.classList.remove('not-selected');
        actualElement.classList.add('not-selected');
    }
};

const handleChangeZone = () => {
    const btnDaily = document.getElementById('btnDaily');
    const btnHourly = document.getElementById('btnHourly');
    const hourlyBlock = document.getElementById('hourly');
    const dailyBlock = document.getElementById('daily');

    btnDaily.addEventListener('click', () => {
        handleClick(btnDaily, btnHourly);
        dailyBlock.style.display = 'grid';
        hourlyBlock.style.display = 'none';
    });

    btnHourly.addEventListener('click', () => {
        handleClick(btnHourly, btnDaily);
        dailyBlock.style.display = 'none';
        hourlyBlock.style.display = 'grid';
    });
};

const retrieveData = (data) => {
    render.renderData(data);
};

const initApp = () => {
    handleSearchEvent();
};

initApp();
