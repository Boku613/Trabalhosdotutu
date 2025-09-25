let dinheiro = 0;

let ganho = 1000;
let despesa = 1800;
for (let mes = 0; mes < 12; mes++) {
  dinheiro += ganho;
  dinheiro -= despesa;
}

console.log(dinheiro);
