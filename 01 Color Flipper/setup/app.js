const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const toggleON = document.getElementById('on')
const toggleOFF = document.getElementById('off')
var lock = "on";

toggleON.addEventListener("click", function(){
    document.getElementById('on')
    .classList.replace('on', 'off')

    document.getElementById('off')
    .classList.replace('off', 'on')

    lock = "off";
    console.log(lock)
})

toggleOFF.addEventListener("click", function(){
    document.getElementById('off')
    .classList.replace('on', 'off')

    document.getElementById('on')
    .classList.replace('off', 'on')

    lock = "on";
    console.log(lock)
})

btn.addEventListener('click', function(){

    if (lock === "off") {
        return;
    }
    // random number between 0 - 3 colors[0]
    const randomNumber = getRandomNumber();
    console.log(randomNumber)

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}