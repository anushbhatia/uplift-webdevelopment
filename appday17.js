// const form = document.querySelector('form');
// const input = document.querySelector('.input');
// const heading = document.querySelector('#task-heading');
// // form.value = '';

// // form.addEventListener('submit', runEvent);
// // input.addEventListener('keydown', runEvent);
// // input.addEventListener('keyup', runEvent);
// // input.addEventListener('keypress', runEvent);
// // input.addEventListener('focus', runEvent);
// // input.addEventListener('blur', runEvent);
// // input.addEventListener('cut', runEvent);
// // input.addEventListener('paste', runEvent);


// function runEvent(e) {
//     console.log(`${e.type}`);
//     heading.innerHTML = input.value;
//     e.preventDefault();
// }


localStorage.setItem('name', 'Anush');
localStorage.setItem('age', '21');
localStorage.clear();

console.log(localStorage.getItem('name'));