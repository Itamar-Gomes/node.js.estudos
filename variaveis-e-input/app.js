const readline = require('readline').creatInterface({
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeraConstanteString = 'minha primeira constante';
console.log(minhaPrimeraConstanteString);
 
let leitordeCampo;
readline.question('informe sua idade:', input => {
    leitordeCampo = input;
    console.log(`o usuario digitou: ${leitordeCampo}`); 
});