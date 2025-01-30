
let str = prompt("Enter a string:");
let result = "";
for (let i = 0; i < str.length; i++) {
    let letter = str[i]; 
    if (letter === letter.toUpperCase()) {
        result += letter.toLowerCase();
    } else {
        result += letter.toUpperCase(); 
    }
}
document.write("Output: " + result);
