let result = "";
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    result += j;
  }
  result += "\n";
}
console.log(result);
