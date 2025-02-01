let num = +prompt("Enter a number");
let a = 0; 
let b = 1;


for (let i =0; i < num; i++) { 
    document.write("," + a); 
    let sum = a + b;
    a = b;
    b = sum;
}
