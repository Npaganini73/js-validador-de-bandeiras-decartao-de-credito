# Validador de Bandeiras de Cartão de Crédito

Este projeto é um **validador de bandeiras de cartão de crédito** desenvolvido em JavaScript. Ele detecta automaticamente as principais bandeiras utilizadas no Brasil com base no número do cartão informado.

## ✅ Bandeiras Suportadas

- Visa
- MasterCard
- American Express
- Diners Club
- Discover
- JCB
- Elo
- Hipercard
- Aura

## 🚀 Como usar

1. Clone este repositório ou copie o arquivo `validador.js` para o seu projeto.
2. Importe ou inclua o arquivo no seu código.
3. Utilize a função `detectarBandeira(numeroCartao)` passando o número do cartão como string.

### Exemplo:

```javascript
console.log(detectarBandeira('4111111111111111')); // Saída: Visa
console.log(detectarBandeira('5500000000000004')); // Saída: MasterCard
console.log(detectarBandeira('340000000000009'));  // Saída: American Express
console.log(detectarBandeira('6362970000457013')); // Saída: Elo
