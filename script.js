window.onload = () => {
    const containerDiv = document.querySelector('.container');
    let newDiv;

    const inputNumber = Number(prompt('insert squares per side', ''));

    if (inputNumber > 100) {
        alert('not that many!');
        location.reload();
    }

    const style = document.documentElement.style;

    style.setProperty('--colNum', inputNumber);
    style.setProperty('--rowNum', inputNumber);

    const squares = inputNumber * inputNumber;

    for(let i = 0; i < squares; i++) {
        newDiv = document.createElement('div');
        newDiv.classList.add('grid-item');
        newDiv.id = `grid-item-${i + 1}`;

        containerDiv.appendChild(newDiv);
    }
}
const containerDiv = document.querySelector('.container');

containerDiv.addEventListener('mouseover', function(event) {
    if(event.target.className.toLowerCase() === 'grid-item') {
        event.target.classList.add('grid-item-active');
    }
})

const resetButton = document.querySelector('.reset-button');
const refreshPage = () => {
    location.reload();
}

resetButton.addEventListener('click', refreshPage)