window.onload = () => {
    const containerDiv = document.querySelector('.container');
    let newDiv;

    for(let i = 0; i < 16; i++) {
        newDiv = document.createElement('div');
        newDiv.classList.add('grid-item');
        newDiv.id = `grid-item-${i + 1}`;

        containerDiv.appendChild(newDiv);
    }
}
const containerDiv = document.querySelector('.container');

containerDiv.addEventListener('mouseover', function(event) {
    if(event.target.className.toLowerCase() === 'grid-item') {
        console.log(event.target);
        event.target.classList.add('grid-item-active');
    }
})
