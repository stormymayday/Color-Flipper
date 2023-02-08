const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

// Targeting button and the span
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Setting up the eventListener
btn.addEventListener('click', function () {

    // Getting random number between 0 and 3
    const randomNumber = getRandomNumber();

    // Targeting body and setting the color
    document.body.style.backgroundColor = colors[randomNumber];

    // Displaying the selected color in the span
    color.textContent = colors[randomNumber];

});

// Random number between 0 and 3
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}