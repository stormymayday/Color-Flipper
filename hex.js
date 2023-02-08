const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Selecting button and the span
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {

    let hexColor = '#';

    for (let i = 0; i < 6; i++) {

        hexColor += hex[getRandomNumber()];

    }

    // Setting the span textContent
    color.textContent = hexColor;

    // Setting background-color on the body
    document.body.style.backgroundColor = hexColor;

});

// Random number between 0 and hex.length -1
function getRandomNumber() {

    return Math.floor(Math.random() * hex.length);

}

