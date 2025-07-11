const fs=require("fs");
console.log(fs);
console.log("Hii");
function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}
fs.readFile("demo.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log(data);
});

add(2,3);
sub(5,6);
multiply(3,2);
console.log("EXIT");