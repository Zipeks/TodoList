import todoItem from "./todo-items";

const project = (name) => {
    const getName = () => name;
    const changeName = (newName) => name = newName;

    const tasks = [];

    const getTasks = () => tasks;
    const addTask = (name, description, dueDate, priority) => {
        const task = todoItem(name, description, dueDate, priority);
        tasks.push(task);
    }
    const removeTask = (task) => {
        const index = tasks.indexOf(task);
        tasks.splice(index, 1);
    }
    return { getName, changeName, addTask, removeTask, getTasks }
}
export default project;