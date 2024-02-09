import fromElements from "./formElements";


export default function defaultDOM(){
    const container = document.createElement('div')
    container.classList.add('container')
    container.appendChild(fromElements())
    

    return container;
}
