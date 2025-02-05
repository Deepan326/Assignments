
let arr = [];
let n=+prompt("Enter a number of elemets")
for (let i = 0; i < n; i++) {
    let num = +prompt("Enter an array");
    arr.push(num); 
}
let result1 =[...arr].sort((a,b) => a - b);
let result2 = [...arr].sort((a,b) => b - a); 

document.write("Ascending Order: " +result1 + "<br>");
document.write("Descending Order: " + result2);