import project from "./projects";

export const app = (() => {
    const projects = [];
    const addProject = (name) => {
        const newProject = project(name);
        projects.push(newProject);
    }
    const getProjects = () => projects;

    return { addProject, getProjects }
})();

export const DOM = (() => {

    const loadProjects = () => {
        const nav = document.querySelector('nav');
        const projects = app.getProjects();
        for (let i = 0; i < projects.length; i++) {
            const project = projects[i];
            const projectName = document.createElement('span');
            projectName.innerText = project.getName();
            nav.appendChild(projectName);
        }
    }
    return { loadProjects }
})();
