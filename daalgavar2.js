// Хэрэглэгч хичнээн тоо оруулхаа шийднэ мөн тоонуудыг бас оруулсны дараа
// оруулсан тоонуудын дундажыг ол

let num = parseInt(prompt("Enter your number"));

let total = 0;
for (let i = 1; i <= num; i++) {
  x = (total = total + i) / num;
}

console.log(x);
