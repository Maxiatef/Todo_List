document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const emptyListMessage = document.querySelector('.emptylist');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskActions);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="label">
                    <input type="checkbox" class="task-checkbox">
                    <span class="task-text">${taskText}</span>
                </div>
                <div class="actions">
                    <button class="btn-picto remove-task-btn">Remove</button>
                </div>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
            emptyListMessage.style.display = 'none';
        }
    }

    function handleTaskActions(e) {
        if (e.target.classList.contains('remove-task-btn')) {
            const li = e.target.closest('li');
            taskList.removeChild(li);
            if (taskList.children.length === 0) {
                emptyListMessage.style.display = 'block';
            }
        } else if (e.target.classList.contains('task-checkbox')) {
            const li = e.target.closest('li');
            li.classList.toggle('done');
        }
    }
});
