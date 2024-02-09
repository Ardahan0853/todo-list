export default function fromElements() {
    const formContainer = document.createElement('div')
    formContainer.innerHTML = `
        <form action="">
            <label for="Title">Title</label>
            <input id="Title" type="text" name="TODO_Title">
            <label for="Desc">Desciption</label>
            <textarea id="Desc" type="text" name="TODO_Desc"></textarea>
            
            <div>
                <label for="Priorty">Priorty</label>
                <input id="Priorty" type="number" name="TODO_Priorty" min="0" max="5">
                <label for="dueDate">Date</label>
                <input id="dueDate" type="date" name="TODO_dueDate">
            </div>
            <button type="submit" class="submit-btn"></button>
        </form>
    `
    
    return formContainer;
}