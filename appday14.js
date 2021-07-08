const list = document.querySelector('ul.collection');
const listitem = document.querySelector('li.collection-item');
var val = list.childNodes[0];
val = list.firstElementChild;
val = list.lastElementChild;
val = listitem.parentElement.parentElement;
val = list.childElementCount;
val = listitem.nextElementSibling;
// console.log(val);
// console.log(list);
// console.log(listitem);
// creating an element 
const li = document.createElement('li');
li.className = 'collection-item';
const textelement = document.createTextNode('One more element');
li.append(textelement);
document.querySelector('ul.collection').appendChild(li);
//

// const link = document.createElement('a');
// link.innerHTML = "<h1>here</h1>";
// li.appendChild(link);

//
const newHeading = document.createElement('h5');
newHeading.append(document.createTextNode("Tasks"));
const oldHeading = document.getElementById('task-heading');
const div = document.querySelector('.heading');
div.replaceChild(newHeading, oldHeading);

console.log(oldHeading);

