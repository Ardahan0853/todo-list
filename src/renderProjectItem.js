export default function renderProjectItem(data){
    const div = document.createElement('div')
    div.innerHTML = 
        `
        <div>
            <h1 class='title'>${data.title}</h1>
            <p>${data.desc}</p>
            <span>${data.priorty}</span>
            <p class="date">${data.dueDate}</p>
            <button class='delete-btn'>Delete this item</button>
        </div>
    `
    
    return div;
}