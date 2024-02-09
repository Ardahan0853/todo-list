import _ from 'lodash';
import defaultDOM from './defaultDOM';
import './styles.css';
import submitForm from './todoData';
import todoSUBMIT from './todoSUBMIT';
import projects from './projects';






const element = document.createElement('div')

const allTodos = []

const realHeader = document.createElement('header')

const header = document.createElement('div')

header.classList.add('header-div')

realHeader.appendChild(header)

// I was about to do localStorage but to be honest i am bit tired. localStroge ile dosyalari tutucaktim ama yorgunum
// localStorage.setItem("allTodos", allTodos);

// const localData = localStorage.getItem("allTodos");

let projectElement 

document.body.appendChild(realHeader)


function waitRENDER(){
  if(allTodos){
    
    
    
    header.appendChild(projects(allTodos))
    
  }
  
}


function component() {
    
    element.appendChild(defaultDOM())
    
    return element;
  }

  document.body.appendChild(component());
  
  
  function checkIsTitleExist(inputValue){
    const filteredTitle = allTodos.filter(item => item.title == inputValue)
    return filteredTitle.length >= 1
  }
  
  
  const submitBTN = document.querySelector('.submit-btn')
  submitBTN.textContent = "Submit"
  const elementChild = document.createElement('div')
  submitBTN.addEventListener('click', (e) =>{
    e.preventDefault()
    
    if(!checkIsTitleExist(todoSUBMIT().title)){
      
      elementChild.classList.add('item-container')
      elementChild.appendChild(submitForm())
      element.appendChild(elementChild)
      allTodos.push(todoSUBMIT())
      console.log(allTodos)
      waitRENDER()
      const projectBTN = document.querySelectorAll('.project')
      eventListener(projectBTN)
    }else{
      elementChild.classList.add('item-container')
      elementChild.appendChild(submitForm())
      element.appendChild(elementChild)
      allTodos.push(todoSUBMIT())
    }

    
  })
  
  function eventListener(item){
    item.forEach(button => button.addEventListener('click', e => {
      
      if(allTodos.filter(todo => todo.title == e.target.textContent)){
        projectElement = allTodos.filter(item => item.title == e.target.textContent)
        let renderHTML = ''
        projectElement.forEach(data => {
         renderHTML += `
          <div>
            <h1 class='title'>${data.title}</h1>
            <p>${data.desc}</p>
            <span>${data.priorty}</span>
            <p class="date">${data.dueDate}</p>
            <button class='delete-btn'>Delete this item</button>
        </div>
          `
        })
        elementChild.innerHTML = renderHTML;
      }

      
      
      // const elementChild = document.createElement('div')
      // elementChild.appendChild(renderProjectItem(projectElement))
      // element.appendChild(elementChild)
    }))
    
  }
  
  
 
 
  