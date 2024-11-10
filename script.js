const maleButton = document.querySelector('.male-button');
const femaleButton = document.querySelector('.female-button');

const buttonContainer = document.querySelector('.button-container');
const containerWidth = buttonContainer.clientWidth;
const containerHeight = buttonContainer.clientHeight;

let maleX = 0;
let maleY = 0;
let femaleX = containerWidth - 100;
let femaleY = 0;

let maleXVelocity = 2;
let maleYVelocity = 2;
let femaleXVelocity = -2;
let femaleYVelocity = 2;

setInterval(() => {
    maleX += maleXVelocity;
    maleY += maleYVelocity;
    femaleX += femaleXVelocity;
    femaleY += femaleYVelocity;

    // Bounce off the walls
    if (maleX < 0 || maleX > containerWidth - 100) {
        maleXVelocity *= -1;
    }
    if (maleY < 0 || maleY > containerHeight - 100) {
        maleYVelocity *= -1;
    }

    if (femaleX < 0 || femaleX > containerWidth - 100) {
        femaleXVelocity *= -1;
    }
    if (femaleY < 0 || femaleY > containerHeight - 100) {
        femaleYVelocity *= -1;
    }

    // Handle collisions
    const distanceX = Math.abs(maleX - femaleX);
    const distanceY = Math.abs(maleY - femaleY);
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < 100) {
        // Bounce off each other
        maleXVelocity *= -1;
        maleYVelocity *= -1;
        femaleXVelocity *= -1;
        femaleYVelocity *= -1;
    }

    maleButton.style.transform = `translate(${maleX}px, ${maleY}px)`;
    femaleButton.style.transform = `translate(${femaleX}px, ${femaleY}px)`;
}, 10);