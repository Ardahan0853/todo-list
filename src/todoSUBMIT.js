import todoItem from "./todoItem"

const formObject = {}


export default function todoSUBMIT(){
        
        const form = document.querySelector('form')
           
                const formData = new FormData(form);
                
  
            for (let entry of formData.entries()) {
                formObject[entry[0]] = entry[1];
            }
            const todoObject = new todoItem(formObject.TODO_Title, formObject.TODO_Desc, formObject.TODO_Priorty, formObject.TODO_dueDate)
            return(todoObject)
            
}