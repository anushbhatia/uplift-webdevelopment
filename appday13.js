var elementById = document.getElementById('task-heading');
// elementById.innerHTML = 'MY LIST';
var querySel = document.querySelector('ul.collection');
var tag = document.getElementsByTagName('li');
var lis = Array.from(tag);
lis.forEach(function (li) {
    li.textContent = 'Jery';
})
var querysela = document.querySelectorAll(".collection-item");

function colourChange() {
    var abc = document.getElementsByClassName('collection-item');
    console.log(ab);

}
var lise = querySel.children;

console.log(lise);

