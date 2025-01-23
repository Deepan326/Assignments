let subject1=+prompt("Enter mark1:");
let subject2=+prompt("Enter mark2:");
let subject3=+prompt("Enter mark3:");
let average =(subject1+subject2+subject3 )/ 3;

if(average >=90){
    console.log("Ex");  
}
else if(average >=80){
    console.log("A+");
}
else if(average>=70){
    console.log("A");   
}
else if(average>=60){
    console.log("B+");   
}
else{
    console.log("fail");
    
}
