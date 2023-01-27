import project from "./projects";

export const app = (() => {
    const projects = [];
    let currentProject;
    const addProject = (name) => {
        const newProject = project(name);
        projects.push(newProject);
    }
    const getCurrentProject = () => currentProject;
    const changeCurrentProject = (e) => {
        currentProject = e;
    };
    const getProjects = () => projects;

    return { addProject, getProjects, changeCurrentProject, getCurrentProject }
})();

export const DOM = (() => {
    const loadTasks = (tasks) => {
        const main = document.querySelector('main');
        main.innerHTML = '';
        for (let i = 0; i < tasks.length; i++) {
            const taskName = document.createElement('h1');
            taskName.innerText = tasks[i].getTitle();
            main.appendChild(taskName);
        }
        newTaskForm();
    }
    const loadProjects = () => {
        const nav = document.querySelector('nav');
        nav.innerHTML = '';
        const projects = app.getProjects();
        for (let i = 0; i < projects.length; i++) {
            const project = projects[i];
            const projectBtn = document.createElement('button');

            const projectName = document.createElement('span');
            projectName.innerText = project.getName();
            projectBtn.appendChild(projectName);
            projectBtn.addEventListener('click', () => {
                loadTasks(project.getTasks());
                app.changeCurrentProject(project);
            })

            nav.appendChild(projectBtn);
        }
        newProjectForm();
    }
    const newProjectForm = () => {
        const nav = document.querySelector('nav');

        const form = document.createElement('form');

        const projectName = document.createElement('input');
        projectName.setAttribute('type', 'text');

        const addBtn = document.createElement('button');
        addBtn.setAttribute('type', 'submit');
        addBtn.innerText = '+';

        form.appendChild(projectName);
        form.appendChild(addBtn);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            app.addProject(projectName.value);
            loadProjects();
        })
        nav.insertBefore(form, nav.firstChild);
    }
    const newTaskForm = () => {
        const main = document.querySelector('main');

        const form = document.createElement('form');

        const taskName = document.createElement('input');
        taskName.setAttribute('type', 'text');

        const taskDescription = document.createElement('input');
        taskDescription.setAttribute('type', 'text');

        const taskDueDate = document.createElement('input');
        taskDueDate.setAttribute('type', 'date');

        const taskPriority = document.createElement('select');

        const option1 = document.createElement('option');
        option1.value = 1;
        option1.innerText = 1;
        taskPriority.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = 2;
        option2.innerText = 2;
        taskPriority.appendChild(option2);

        const option3 = document.createElement('option');
        option3.value = 3;
        option3.innerText = 3;
        taskPriority.appendChild(option3);

        const addBtn = document.createElement('button');
        addBtn.setAttribute('type', 'submit');
        addBtn.innerText = '+';

        form.appendChild(taskName);
        form.appendChild(taskDescription)
        form.appendChild(taskDueDate);
        form.appendChild(taskPriority);
        form.appendChild(addBtn);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            app.getCurrentProject().addTask(taskName.value, taskDescription.value, taskDueDate.value, taskPriority.value);
            loadTasks(app.getCurrentProject().getTasks());
        })
        main.insertBefore(form, main.firstChild);

    }
    return { loadProjects, newTaskForm }
})();
