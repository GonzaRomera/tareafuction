function calcularAreaTriangulo(base: number, altura: number) {
  let area: number = (base * altura) / 2;

  return area;
}
console.log(calcularAreaTriangulo(1, 2));
console.log(calcularAreaTriangulo(2, 4));
console.log(calcularAreaTriangulo(3, 6));
console.log(calcularAreaTriangulo(4, 8));
console.log(calcularAreaTriangulo(5, 10));
console.log(calcularAreaTriangulo(6, 12));
console.log(calcularAreaTriangulo(7, 14));

for (let i: number = 1; i <= 7; i++) {
  console.log(calcularAreaTriangulo(i, i * 2));
}
