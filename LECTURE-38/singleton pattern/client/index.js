const Principal=require("../principal/principal");

function suspend(studentName){
    // let principal=new Principal("Saloni");
    let principal=Principal.getPrincipal();
    principal.suspend(studentName);
}

function notify(){
    // let principal=new Principal("Dhiman");
    principal.notify("HII");
}

//isse hr baar nya principal bnra h but ik hee principal hona chahiye isse resolve krna hota h singleton pattern use krke