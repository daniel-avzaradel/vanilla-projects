const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

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

    let hexColor = '#';
    for (let i=0; i < 6; i++) {

        let random = getRandomNumber();
        hexColor += hex[random];
        getRandomNumber();
        console.log(random)
    }

    console.log(hexColor)

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
