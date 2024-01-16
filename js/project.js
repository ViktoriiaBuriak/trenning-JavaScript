// Вимоги:

// Створіть форму для додавання нового проекту.
// Для кожного проекту виведіть список завдань.
// Завдання має включати заголовок, опис та дедлайн.
// Завдання може мати підзавдання (підзаголовки).
// Реалізуйте видалення проектів, завдань та підзавдань.
// Відзначте завдання як виконані, змінюючи їхній стан та стилізацію.

document.addEventListener('DOMContentLoaded', function(){
    const projectForm = document.querySelector('.project-form');
    const projectInput = document.querySelector('.project-input');
    const projectTextar = document.querySelector('.project-text');
    const projectData = document.querySelector('.project-data');
    const projectList = document.querySelector('.project-list');
    const addButton = document.querySelector('.add-btn');
    const subtaskContainer = document.querySelector('.project-subtask');

    projectForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addProjeck(projectInput.value);
        projectInput.value = '';
    })

    addButton.addEventListener('click', function() {
        const subtask = document.createElement('textarea');
        subtask.cols = '30';
        subtask.rows = '10';
        subtask.placeholder = 'Enter projeck subtask';
        subtaskContainer.appendChild(subtask);
    })

    function addProjeck(projectTitle) {
        const list = document.createElement('li');
        const title = document.createElement('h2');
        title.textContent = `Project title: ${projectTitle}`;
        const description = document.createElement('p');
        description.textContent = `Project description: ${projectTextar.value}`;
        const data = document.createElement('p');
        data.textContent = `Deadline date: ${projectData.value}`;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const deleteProject = document.createElement('button');
        deleteProject.textContent = 'Delete projeck';

        list.appendChild(title);
        list.appendChild(description);
        list.appendChild(data);
        list.appendChild(checkbox);
        list.appendChild(deleteProject);

        projectList.appendChild(list);

        checkbox.addEventListener('change', function() {
            if(checkbox.checked) {
                const label = document.createElement('label');
        label.textContent = 'Completed successfully';
        checkbox.parentElement.appendChild(label);
            } 
        })

        deleteProject.addEventListener('click', function() {
            list.remove();
        })
        
    }
})


// document.addEventListener('DOMContentLoaded', function(){
//     const projectForm = document.querySelector('.project-form');
//     const projectInput = document.querySelector('.project-input');
//     const projectTextar = document.querySelector('.project-text');
//     const projectData = document.querySelector('.project-data');
//     const projectList = document.querySelector('.project-list');
//     const addButton = document.querySelector('.add-btn');
//     const subtaskContainer = document.querySelector('.project-subtask');

//     projectForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         addProject(projectInput.value, projectTextar.value, projectData.value);
//         projectInput.value = '';
//         projectTextar.value = '';
//         projectData.value = '';
//     });

//     addButton.addEventListener('click', function() {
//         addSubtask(subtaskContainer);
//     });

//     function addProject(title, description, deadline) {
//         const listItem = document.createElement('li');
//         listItem.classList.add('project-item');

//         const titleElement = document.createElement('h2');
//         titleElement.textContent = `Project title: ${title}`;

//         const descriptionElement = document.createElement('p');
//         descriptionElement.textContent = `Project description: ${description}`;

//         const deadlineElement = document.createElement('p');
//         const formattedDeadline = formatDeadline(deadline);
//         deadlineElement.textContent = `Deadline date: ${formattedDeadline}`;

//         const checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.classList.add('task-checkbox');

//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete project';
//         deleteButton.classList.add('delete-button');

//         listItem.appendChild(titleElement);
//         listItem.appendChild(descriptionElement);
//         listItem.appendChild(deadlineElement);
//         listItem.appendChild(checkbox);
//         listItem.appendChild(deleteButton);

//         projectList.appendChild(listItem);

//         checkbox.addEventListener('change', function() {
//             if (checkbox.checked) {
//                 const label = document.createElement('label');
//                 label.textContent = 'Completed successfully';
//                 listItem.appendChild(label);
//             }
//         });

//         deleteButton.addEventListener('click', function() {
//             listItem.remove();
//         });
//     }

//     function addSubtask(container) {
//         const subtask = document.createElement('textarea');
//         subtask.cols = '30';
//         subtask.rows = '10';
//         subtask.placeholder = 'Enter project subtask';
//         container.appendChild(subtask);
//     }

//     function formatDeadline(deadline) {
//         const date = new Date(deadline);
//         return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
//     }
// });
