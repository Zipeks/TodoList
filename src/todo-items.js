const todoItem = (title, description, dueDate, priority) => {
    const getTitle = () => title;
    const changeTitle = (newTitle) => title = newTitle;
    const getDescription = () => title;
    const changeDescription = (newDescription) => description = newDescription;
    // const getTitle = () => title;
    // const changeTitle = (newTitle) => title = newTitle;
    const getPriority = () => priority;
    const changePriority = (newPriority) => priority = newPriority;

    return { getTitle, changeTitle, getDescription, changeDescription, getPriority, changePriority }
}
export default todoItem;