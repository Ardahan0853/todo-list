

export default function projects(project){
    const div = document.createElement('div')
     project.forEach(item => { 
        if(item.title){
            div.innerHTML = `<button class='project'>${item.title}</button>`
        }
        
    })
    return div;
}