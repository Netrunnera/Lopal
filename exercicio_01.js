
let a = Number(prompt("Digite o valor da compra: "));
let b = Number(prompt("Digite o numero de pessoas: "));
let c = prompt("Vai ter a taxa de serviço de 10%? (sim/não): ");

console.log(`---------------------VALORES-------------------------------`);

if (c == "sim") {
    let d = a + (a * 0.1);
    let e = d / b;

    console.log(`O valor que cada pessoa deve pagar é: R$ ${e.toFixed(2)}`);
}
else {
    let e = a / b;

    console.log(`O valor que cada pessoa deve pagar é: R$ ${e.toFixed(2)}`);
}

console.log(`-----------------------------------------------------------`);

