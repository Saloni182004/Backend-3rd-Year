// Accessing dom element
//1. using id
//2. using class
//3. using tag
//4. using query selector - we can pass pass class by using . , id by # and tag by using ful tag name
/*
let ele1=document.getElementById("heading");
console.log(ele1);
let ele2=document.getElementsByClassName("Item");
console.log(ele2[0]);
let ele3=document.getElementsByTagName("p");
console.log(ele3[0]);
let ele4=document.querySelector("p");
console.log(ele4);
//let ele5=document.querySelector(".Item");
console.log(ele5);
let ele6=document.querySelectorAll(".Item");
console.log(ele6);
let ul=document.querySelector("#container");*/

//Properties
/*
innerHtml
innerText
textContent
*/
/*
let data=ele4.innerText;
console.log(data);
ele4.innerText="Changed using js";


let data2=ul.innerHTML;
let data3=ul.innerText;
let data4=ul.textContent;
console.log(data2);
console.log(data3);
console.log(data4);

ul.innerHTML=`<li class="Item">Item4</li>
              <li class="Item">Item5</li>
              <li class="Item">Item6</li>`*/

/*
getAttribute
setAttribute
classList
*/
/*
let ele5=document.querySelector(".Item");
console.dir(ele5);
console.dir(ele5.getAttribute("id"));
console.dir(ele5.getAttribute("class"));
ele5.setAttribute("id","js");
console.log(ele5.getAttribute("id"));
ele5.classList.add("delete")
console.log(ele5.classList.contains("delete"));
ele5.classList.remove("Item");
console.log(ele5.classList);
*/

let sign=document.querySelector('.Signup');
let form=document.querySelector('#form');
sign.addEventListener('click',function(){
    form.classList.toggle('hide');
})