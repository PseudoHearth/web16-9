var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');

var currentColor = null;

function paintRed(event) {
    event.target.classList.remove('green');
    event.target.classList.add('red');
    currentColor = 'red';
    event.target.removeEventListener('click', paintRed);
    event.target.addEventListener('click', paintGreen);
}

function paintGreen(event) {
    event.target.classList.remove('red');
    event.target.classList.add('green');
    currentColor = 'green';
    event.target.removeEventListener('click', paintGreen);
    event.target.addEventListener('click', paintRed);
}


div1.addEventListener('click', paintRed);
div2.addEventListener('click', paintRed);
div3.addEventListener('click', paintRed);