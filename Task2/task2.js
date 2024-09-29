const btn = document.querySelector('button');
const iconOne = document.querySelector('#first-icon');
const iconTwo = document.querySelector('#second-icon');
let iconStatus = true;

btn.addEventListener('click', () => {
    if(iconStatus) {
        iconOne.style.display = 'none';
        iconTwo.style.display = 'block';
        iconStatus = false;
    } else if(!iconStatus) {
        iconTwo.style.display = 'none';
        iconOne.style.display = 'block';
        iconStatus = true;
    }
})