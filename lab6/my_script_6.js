//task 1

const random_square = document.getElementById('random_square')

function randomColor() {
    var color = "#";
    var HexTable = "0123456789ABCDEF";
    for (var i = 0; i < 6; ++i){
        color += HexTable[Math.floor(Math.random()*16)];
    }
    random_square.style.backgroundColor = color;
}

random_square.addEventListener('click', randomColor)

//task 2

const counter = document.querySelector('#counter_id')
let check = 0
let myTimeout = null;

function CountFunc() {
    clearTimeout(null);
    counter.innerHTML = check + " times";
    check++;
    myTimeout = setTimeout(CountFunc, 1000);
}

function StopCountFunc() {
    clearTimeout(myTimeout);
    return;
}

counter.addEventListener('mouseover', CountFunc);
counter.addEventListener('mouseout', StopCountFunc);
//task 3

function DropdownFunc() {
    const Dropdown_inside = document.getElementById("dropdown_inside")
    Dropdown_inside.classList.toggle("show");
}
//task 4


let nowClick = false;
let nowEsc = true

const field = document.getElementById('Field')
const circle = document.getElementById('Circle')

circle.addEventListener('click', (e) => {
    circle.style.position = 'absolute';
    nowClick = true
    nowEsc = true
})

document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
        nowEsc = false
    }
})

const edgeLeft = field.offsetLeft + circle.offsetWidth / 2
const edgeTop = field.offsetTop + circle.offsetWidth / 2
const edgeWidth = field.offsetWidth - circle.offsetWidth + edgeLeft
const edgeHeight = field.offsetHeight - circle.offsetHeight + edgeTop

field.addEventListener('mousemove', (a) => {
    if (nowClick && nowEsc) {
        let X = a.pageX
        let Y = a.pageY
        if (X > edgeLeft && X < edgeWidth && Y > edgeTop && Y < edgeHeight) {
            console.log("TRUE")
            circle.style.left = X - circle.offsetWidth / 2 + 'px';
            circle.style.top = Y - circle.offsetHeight / 2 + 'px';
        } else {
            console.log("FALSE")
        }
    }
});
