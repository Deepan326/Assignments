let input = +prompt("Enter a number");
let sum = 0;
let fra=0;
for(let j=1;j<=input;j++){
    let fractional=1/j
   fra+=fractional
}
document.write(`a: ${fra.toFixed(2)}<br>`);
for (let i = 1; i <= input; i++) {
    let evenNumber = i * 2; 
    sum += evenNumber; 
}

document.write(`b: ${sum}`);
