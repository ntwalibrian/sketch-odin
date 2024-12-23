console.log('hell world')

const container =  document.querySelector('.mainContainer')
let numberOfGrids = 16
gamePlay(numberOfGrids)

function gamePlay (size) {
    

    for (let i = 0; i < size * size; i++){
        const square = document.createElement('div')

        square.style.height = `calc(100% / ${size})`
        square.style.width = `calc(100%/ ${size})`

        square.classList.add('grid-square');
        square.classList.add(`sq-${i+1}`)
        square.addEventListener('mouseover', changeColor)

        container.appendChild(square);
    }

}

let colorMode = 'rainbow' ; 

function changeColor (e) {
    if (colorMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)

        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (colorMode === 'eraser') {
        e.target.style.backgroundColor = 'white'
    } else {
        e.target.style.backgroundColor = colorMode
    }
    
    
}

const modifyGrid = document.getElementById('modifyGrid')
const clear = document.getElementById('clear')
const eraser = document.getElementById('eraser')
const rainbow = document.getElementById('rainbow')
const color = document.getElementById('color')


modifyGrid.onclick = () => {
    let number;
    do {
        number = prompt("set number of grids", 16)
    } while (isNaN(number) || number <= 0);

    numberOfGrids = Number(number)
    container.innerHTML = ""
    gamePlay(numberOfGrids)
}

color.onclick = () => {
    let drawColor;
    do {
        drawColor = prompt("set color", 'red')
    } while(!isValidColor(drawColor));
    
    function isValidColor(color) {
        const testElement = document.createElement('div');
        testElement.style.color = color;
        return testElement.style.color !== '';
    }

    colorMode = drawColor
}

clear.onclick = () => {
    container.innerHTML = ""
    gamePlay(numberOfGrids)
}

eraser.onclick = () => {
    colorMode = 'eraser'
}

rainbow.onclick = () => {
    colorMode = 'rainbow'
}



