// Take limit and a divisible from user, Find all numbers that is divisible by
// divisible from 1 to limit

let limit = parseInt(prompt("Enter your limit"));
let div = parseInt(prompt("Enter your divisible "));

for (let i = 1; i <= limit; i++)
  if (i % div === 0) {
    console.log(i);
  }
