export default function getProject(data){
    
    class datas{
        constructor(name){
            this.name = name
        }
        createEl(){
            
           const newEl = document.createElement('div')
           newEl.classList.add(`${this.name}`)
           return newEl
        }
    }
    
    const newData = new datas(data)
    
    return newData
                        
}