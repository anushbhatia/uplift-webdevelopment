// document.querySelector('.simplebutton').addEventListener('click', onClick);

// function onClick(e) {
//     let val = e;
//     val = e.target;
//     val = e.target.className;
//     val = e.type;
//     val = e.timeStamp;
//     val = e.clientY;
//     val = e.clientX;
//     val = e.offsetY;
//     val = e.offsetX;
//     console.log(val);
// }
const button = document.querySelector('.simplebutton');
const heading = document.querySelector('#task-heading');
const card = document.querySelector('.card');

// button.addEventListener('dblclick', runEvent);
// button.addEventListener('click', runEvent);
card.addEventListener('mouseover', runEvent);
card.addEventListener('mouseout', runEvent);
card.addEventListener('mouseenter', runEvent);
card.addEventListener('mouseleave', runEvent);
// card.addEventListener('mousemove', runEvent);

function runEvent(e) {
    // heading.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;
    // document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},100)`;
    // console.log(`MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`);
    console.log(`Event Type: ${e.type}`);
}
const form = document.querySelector('.input');
form.value = '';