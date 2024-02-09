
export default function todoCreate(item){
    let getData = item()
    let data 
    const isEmpty = Object.values(getData).every(value => value)
    if(isEmpty){
        data = getData
        
    }else{
        data = null;
        alert("Please fill the inputs")
    }
    const div = document.createElement('div')
    div.innerHTML += `
        <div>
            <h1 class='title'>${data.title}</h1>
            <p>${data.desc}</p>
            <span>${data.priorty}</span>
            <p class="date">${data.dueDate}</p>
            <button class='delete-btn'>Delete this item</button>
        </div>
    `
    return div
}