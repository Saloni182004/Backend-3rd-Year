const color = document.getElementById('box');
const btn = document.getElementById('random');
const stopbtn = document.getElementById('stop');
let intervalId=null;
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener('click', function(e) {
    intervalId = setInterval(() => {
    color.style.backgroundColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
}, 1000);
});

stopbtn.addEventListener('click', function () {
    clearInterval(intervalId);
});
