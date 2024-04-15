const tareas=[
    {id:1,name:'Terminar desafío',completed:false},
    {id:2,name:'Cocinar galletas Navidad',completed:false},
    {id:3,name:'Comprar regalo amigo secreto',completed:false},
    {id:4,name:'Hacer listado compras supermercado',completed:false}
]

const inputValor = document.querySelector('.addInput')
const listaTareas = document.querySelector('.tasks')
const agregarButton = document.getElementById('btnAgregar')
const total = document.getElementById('total')
const hechas =document.getElementById('listas')

const agregaTarea = () => {
    const nombreTarea =inputValor.value.trim()
    if (!nombreTarea){
        alert("Escribe tu tarea")
        return
    }
    const ultimaTarea = tareas[tareas.length -1]

    const nuevaTarea ={
        id: ultimaTarea ? ultimaTarea.id + 1 : 1,
        name: nombreTarea,
        completed: false
    }
    tareas.push(nuevaTarea)

    muestraTareas()
}

agregarButton.addEventListener('click', agregaTarea)

const eliminaTarea =(idTarea) =>{
    const indice = tareas.findIndex(tarea => tarea.id === idTarea)
    tareas.splice(indice, 1)
    //console.log(`Tarea con id ${idTarea} eliminada.`)
    muestraTareas()
}

const changeStatus = (idTarea) => {
    const indice = tareas.findIndex(task => task.id === idTarea)
      tareas[indice].completed = !tareas[indice].completed
      //console.log(`Estado de la tarea con id ${idTarea} cambiado a ${tareas[indice].completed ? true : false}.`)
    muestraTareas()
  };

const muestraTareas = () =>{
    let template = ""
    let completadas =0
    tareas.forEach((task)=>{
        template +=`
        <div class='caja'>
            <p>${task.id}</p>
            <p>${task.name}</p>
            <input type="checkbox" ${task.completed ? 'checked' : '' } onclick='changeStatus(${task.id})'/>
            <button id="X" onclick = eliminaTarea(${task.id}) >X</button> 
        </div>
        `
        if (task.completed){
            completadas ++
        }
    })

    listaTareas.innerHTML = template
    total.innerHTML=tareas.length
    hechas.textContent=completadas
}

muestraTareas()