alert('Boas-vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}.`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O  número secrego é menor do que ${chute}.`);
        } else {
            alert(`O  número secrego é maior do que ${chute}.`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}
 let = palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
 alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`); 

// if (tentativas > 1) {
// alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);}
