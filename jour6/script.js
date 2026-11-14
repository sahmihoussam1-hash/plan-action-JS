const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Supprimer</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
});
taskList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        const liToDelete = e.target.parentElement;
        liToDelete.remove();
    }
});