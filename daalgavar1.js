// Хэрэглэгчийн өгсөн тоо хүртлэх тооны нийлбэрийг тооц
let num = parseInt(prompt("Enter your number"));

let total = 0;
for (let i = 1; i <= num; i++) {
  total = total + i;
}
console.log(total);
