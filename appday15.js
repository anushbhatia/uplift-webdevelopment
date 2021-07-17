const li = document.createElement('li');
li.className = 'collection-item';
const textelement = document.createTextNode('One more element');
li.append(textelement);
document.querySelector('ul.collection').appendChild(li);

//Remove a element
const lis = document.querySelectorAll('li');
lis[5].remove();
const list = document.querySelector('ul');
list.removeChild(lis[0]);

//classes and attribute
const firstli = document.querySelector('li:first-child');
// firstli.className = 'test';
firstli.classList.add('test');
firstli.classList.remove('test');
console.log(firstli);

//

var link = document.querySelector('.link');
var val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com');
val = link.removeAttribute('target');
console.log(val);

//
document.querySelector('.simplebutton').addEventListener('click', onclick);
//
function onclick(e) {
    val = e.target;
    val = e.target.className;
    console.log(val);
}