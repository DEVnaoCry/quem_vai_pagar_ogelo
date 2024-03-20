const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

        readline.question('Digite o nome do primeiro amigo: ', (nomeAmigo1) => {
        readline.question('Digite o nome do segundo amigo: ', (nomeAmigo2) => {
        readline.question(`Quem vai pagar O GELO hoje? ${nomeAmigo1} ou ${nomeAmigo2}: `, (escolha) => {
            let vaiPagarOGelo = (escolha.toLowerCase() === 'true');

            if (vaiPagarOGelo) {
                console.log(`${nomeAmigo1} vai pagar o GELO hoje!`);
            } else {
                console.log(`${nomeAmigo2} vai pagar o GELO hoje!`);
            }

            readline.close();
        });
    });
});
