// let Data;
// function getUsersData(URL){
//     fetch(URL)
//     .then((res)=>{
//         console.log(res);
//         return res.json();
//     })
//     .then((data)=>{
//         Data=data;
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }
// getUsersData('https://jsonplaceholder.typicode.com/users')


let Data;
function getUsersData(URL) {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      Data = data;
      let userList = document.querySelector(".list");
      for (let i = 0; i < Data.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `
          <div>${Data[i].username}</div>
        `;
        userList.appendChild(li);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
getUsersData('http://localhost:3000/users');

function addUser(name, username, URL) {
  let data = {
    name: name,
    username: username
  };

  fetch(URL, {
    method: "POST",
    headers: { // <-- should be 'headers' not 'header'
      "Content-Type": "application/json" // <-- spelling of "application" was wrong
    },
    body: JSON.stringify(data)
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    if (data.success) {
      alert("User registered successfully");
      nameinput.value="";
      usernameinput.value="";
    } else {
      alert("Not added");
      nameinput.value="";
      usernameinput.value="";
    }
  })
  .catch((error) => {
    console.error("Error:", error);
    alert("Something went wrong");
  });
}


let regForm=document.querySelector(".register");
let nameinput=document.querySelector(".name");
let usernameinput=document.querySelector(".username");
regForm.addEventListener('submit',function(e){
  e.preventDefault();
  let name=nameinput.value;
  let username=usernameinput.value;
  addUser(name,username,"http://localhost:3000/addUser");
})



