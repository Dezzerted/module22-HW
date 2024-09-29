const screenSize = document.querySelector('#screen-size');
const coordinates = document.querySelector('#coordinates');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    screenSize.textContent = `Размер вашего монитора: ширина = ${screen.width}px, высота = ${screen.height}px`;

    if(!navigator.geolocation) {
        coordinates.textContent = 'Информация о местоположении недоступна';
    } else {
        coordinates.textContent = 'Определение местоположения...';
        navigator.geolocation.getCurrentPosition(success, error);
    }
})

function error() {
    coordinates.textContent = 'Информация о местоположении недоступна'
}

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    coordinates.textContent = `Ваши координаты: широта = ${latitude}°, долгота = ${longitude}°`;
}

