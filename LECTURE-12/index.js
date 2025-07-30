//Add element through js in html
//1. create a new element using create element function
//2. insert required data in that element using innerhtml or innertext
//3. insert new element in parent container using appendChild

// let todo={
//     id:1234,
//     title:"Study"
// };
let todos=[
    {
    id:1234,
    title:"Study"
},
{
    id:125234,
    title:"play"
}
];
let todocontainer=document.querySelector(".todocontainer");
function addToDo(todo){
    let li=document.createElement("li");
    li.innerHTML=`<div>
                <input type="checkbox" name="" id="">
                <h1>${todo.title}</h1>
                <div>
                    <button>❌</button>
                    <button>✏️</button>
                </div>
            </div>`
    todocontainer.appendChild(li);
}

// addToDo(todo);
addToDo(todos[1]);

function showAllTodos(todos){
    todos.forEach(todo=>{
        addToDo(todo);
    });
}
showAllTodos(todos);