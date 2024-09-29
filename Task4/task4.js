const timeZ = document.querySelector('#timezone');
const dateTime = document.querySelector('#date-time');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    if(!navigator.geolocation) {
        timeZ.textContent = 'Информация о временной зоне недоступна';
        dateTime.textContent = 'Информация о местном времени недоступна';
    } else {
        timeZ.textContent = 'Определение местоположения...';
        dateTime.textContent = 'Определение местоположения...';
        navigator.geolocation.getCurrentPosition(success, error);
    }
})

function error() {
    timeZ.textContent = 'Информация о временной зоне недоступна';
    dateTime.textContent = 'Информация о местном времени недоступна';
}

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`;

    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        if(data.length !== 0) {
            timeZ.textContent = `Ваша временная зона: ${data.timezone}`;
            dateTime.textContent = `Местное время: ${data.date_time_txt}`;
        } else {
            alert('Возникла какая-то ошибочка')
        }
    })
    .catch(() => {
        timeZ.textContent = 'Возникла какая-то ошибочка';
        dateTime.textContent = 'Возникла какая-то ошибочка';
    })
}


