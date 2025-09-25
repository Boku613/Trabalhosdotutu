let quantidadefatias = 32;
let quantidadealunos = 9;


console.log(
  "cada aluno comeu",
  Math.floor(quantidadefatias / quantidadealunos)
);
console.log("quantidade que sobrou", quantidadefatias % quantidadealunos);

let numeros = [10, 25, 7, 42, 18];
let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}

console.log("O maior número é:", maior);
