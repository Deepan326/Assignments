let numbers = [];
let positive = 0;
let negative = 0;

for (let i = 0; i < 10; i++) {
    let num = +prompt(`Enter number ${i}:`);
    numbers.push(num);

    if (num > 0) {
        positive++;
    } else if (num < 0) {
        negative++;
    }
}
 console.log(`positive numbers:${positive}`);
 console.log(`Negative numbers:${negative}`);