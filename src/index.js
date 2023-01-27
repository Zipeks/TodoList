import './style.css';
import { app, DOM } from './managing-tasks';

app.addProject('Julka');
DOM.loadProjects();
DOM.newTaskForm();
