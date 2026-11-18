
let tamanho = Number(prompt("Digite o tamanho do arquivo em GB: "));
let velocidade = Number(prompt("Digite a velocidade da internet em Mbps: "));

let tamanhoMb = tamanho * 8192;

let tempoSegundos = tamanhoMb / velocidade;

let minutos = Math.floor(tempoSegundos / 60);
let segundos = Math.floor(tempoSegundos % 60);

console.log(`Tempo estimado: ${minutos} minutos e ${segundos} segundos.`);

alert(`Tempo estimado: ${minutos} minutos e ${segundos} segundos.`);
