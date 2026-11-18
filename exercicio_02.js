
let saldo = Number(prompt("Digite o saldo do seu cartão: "));

let tarifa = 5.00;

let viagens = Math.floor(saldo / tarifa);
let sobra = saldo % tarifa;

console.log(`Você pode fazer ${viagens} viagens.`);
console.log(`Saldo restante: R$ ${sobra.toFixed(2)}`);

alert(`Você pode fazer ${viagens} viagens.`);
alert(`Saldo restante: R$ ${sobra.toFixed(2)}`);
