function detectarBandeira(numeroCartao) {
    numeroCartao = numeroCartao.replace(/\D/g, ''); // Remove qualquer caractere não numérico

    const bandeiras = [
        { nome: 'Visa', regex: /^4\d{12}(\d{3})?$/ },
        { nome: 'MasterCard', regex: /^(5[1-5]\d{14}|2[2-7]\d{14})$/ },
        { nome: 'American Express', regex: /^3[47]\d{13}$/ },
        { nome: 'Diners Club', regex: /^3(0[0-5]|[68]\d)\d{11}$/ },
        { nome: 'Discover', regex: /^6(?:011|5\d{2})\d{12}$/ },
        { nome: 'JCB', regex: /^(?:2131|1800|35\d{3})\d{11}$/ },
        { nome: 'Elo', regex: /^(4011(78|79)|431274|438935|451416|4576(31|32)|504175|5067(0[0-9]|1[0-9]|20)|5090(4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])|627780|636297|636368|650(0(3[1-3]|4[0-3])|4[1-3][0-9]|5[0-9]{2}|7[0-9]{2}|9[0-9]{2})|6516(5[2-9]|6[0-9]|7[0-9])|6550(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]))\d{10,12}$/ },
        { nome: 'Hipercard', regex: /^(3841\d{12}|60(38\d{11}|70\d{12}))$/ },
        { nome: 'Aura', regex: /^50[0-9]{14,17}$/ }
    ];

    for (let bandeira of bandeiras) {
        if (bandeira.regex.test(numeroCartao)) {
            return bandeira.nome;
        }
    }

    return 'Bandeira não identificada';
}

// Exemplo de uso:
console.log(detectarBandeira('4111111111111111')); // Visa
console.log(detectarBandeira('5500000000000004')); // MasterCard
console.log(detectarBandeira('340000000000009'));  // American Express
console.log(detectarBandeira('6362970000457013')); // Elo
