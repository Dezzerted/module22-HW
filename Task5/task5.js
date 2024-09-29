const input = document.querySelector('input');

const outputBoxOne = document.querySelector('.chat-output_one');
const outputBoxTwo = document.querySelector('.chat-output_two');
const outputBoxThree = document.querySelector('.chat-output_three');

const outputTextOne = document.querySelector('#text-one');
const outputTextTwo = document.querySelector('#text-two');
const outputTextThree = document.querySelector('#text-three')

const sendBtn = document.querySelector('.send');
const geoBtn = document.querySelector('.geo');

const url = 'wss://echo-ws-service.herokuapp.com/';

let websocket;

sendBtn.addEventListener('click', () => {
    if (input.value !== '') {
        const message = input.value;
        outputBoxOne.style.display = 'block';
        outputTextOne.innerHTML = message;
        input.value = '';

        websocket = new WebSocket(url);
        websocket.onopen = function() {
            outputBoxTwo.style.display = 'block';
            outputTextTwo.innerHTML = message;
        };
        } 
})

geoBtn.addEventListener('click', () => {
    if(!navigator.geolocation) {
        outputBoxThree.style.display = 'block';
        outputTextThree.innerHTML = 'Нет разрешения на получение данных о геолокации';
    } else {
        outputBoxThree.style.display = 'block';
        outputTextThree.innerHTML = 'Получение данных о геолокации...';
        navigator.geolocation.getCurrentPosition(success, error);
    }
})

function error() {
    outputTextThree.innerHTML = 'Возникла ошибка при получении данных о геолокации';
}

function success(position) {

    outputTextThree.innerHTML = '';
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const urlMap = `https://www.openstreetmap.org/#map=16/${latitude}/${longitude}`;

    const mapLink = document.createElement('a');
    mapLink.href = urlMap;
    outputTextThree.appendChild(mapLink);

    const mapLinkText = 'Ваша геолокация';
    websocket.send(mapLinkText); 
    websocket.onmessage = function(e) {
        mapLink.innerHTML = e.data;
    }
}