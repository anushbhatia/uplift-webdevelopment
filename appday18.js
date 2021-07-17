const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    filter.addEventListener('keyup', filterTask);
}

function addTask(e) {
    const li = document.createElement('li');

    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = "delete-item";
    link.innerHTML = '<i class="material-icons">delete</i>'

    li.appendChild(link);
    taskList.appendChild(li);
    e.preventDefault();

}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item'))
        e.target.parentElement.parentElement.remove();
}
function clearTask() {
    taskList.innerHTML = '';
}
function filterTask(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
        function (task) {
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            }
            else {
                task.style.display = 'none';
            }
        }
    );
}