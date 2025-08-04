// //Add element through js in html
// //1. create a new element using create element function
// //2. insert required data in that element using innerhtml or innertext
// //3. insert new element in parent container using appendChild

// // let todo={
// //     id:1234,
// //     title:"Study"
// // };
// let todos=[
//     {
//     id:1234,
//     title:"Study"
// },
// {
//     id:125234,
//     title:"play"
// }
// ];
// let todocontainer=document.querySelector(".todocontainer");
// function addToDo(todo){
//     let li=document.createElement("li");
//     li.innerHTML=`<div>
//                 <input type="checkbox" name="" id="">
//                 <h1>${todo.title}</h1>
//                 <div>
//                     <button>❌</button>
//                     <button>✏️</button>
//                 </div>
//             </div>`
//     todocontainer.appendChild(li);
// }

// // addToDo(todo);
// addToDo(todos[1]);

// function showAllTodos(todos){
//     todos.forEach(todo=>{
//         addToDo(todo);
//     });
// }
// showAllTodos(todos);

let todos = [];

let todocontainer = document.querySelector(".todocontainer");
let input = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");

function addToDo(todo) {
    let li = document.createElement("li");
    li.className = "todo";
    li.setAttribute("data-id", todo.id); 

    li.innerHTML = `
        <div>
            <input type="checkbox" />
            <h1>${todo.title}</h1>
            <div>
                <button class="deleteBtn">❌</button>
                <button>✏️</button>
            </div>
        </div>
    `;

    li.querySelector(".deleteBtn").addEventListener("click", function () {
        let idToDelete = todo.id;
        todos = todos.filter(t => t.id !== idToDelete);
        showAllTodos(todos);
    });

    todocontainer.appendChild(li);
}

function showAllTodos(todos) {
    todocontainer.innerHTML = ""; 
    todos.forEach(todo => addToDo(todo));
}

addBtn.addEventListener("click", () => {
    let title = input.value.trim();
    if (title === "") return;

    let newTodo = {
        id: Date.now(),
        title: title
    };

    todos.push(newTodo);
    showAllTodos(todos);
    input.value = ""; 
});
