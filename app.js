var a = document.all;
a = document.all[1];
a = document.all.length;
a = document.body;
a = document.forms;
a = document.URL;
a = document.links[0];
var b = document.links[0].className;
a = document.scripts;

let scriptsarr = Array.from(a);

scriptsarr.forEach(function (scripts) {
    console.log(scripts.src);
})

a = document.images;
console.log(a);
//
var n = document.getElementById("task-title");
n.style.color = 'red';
n.innerHTML = `Task List`;
console.log(document.querySelector(".collection"));
console.log(document.getElementsByTagName("li"));

