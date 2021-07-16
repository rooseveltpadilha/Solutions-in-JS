// Crie uma função para somar receitas, somar despesas em Array. Em seguida faça um balance.

var receitas = [1.255, 2, 3, 4];
let despesas = [1, 2,5,5,5,5];

const somaReceitas = () => {
    let saldoReceitas = 0;
    for (let i = 0; i < receitas.length; i++) {
        saldoReceitas += receitas[i];
    }
    return saldoReceitas;
}

const somaDespesas = () => {
    let saldoDespesas = 0;
    for(let i = 0; i < despesas.length; i++) {
        saldoDespesas += despesas[i];
    }
    return saldoDespesas
}

const saldoTotal = () => {
    return (somaReceitas() - somaDespesas());
}

const imprimirNaTela = () => {
    if (saldoTotal() > 0) {
        console.log('positivo: R$ '+saldoTotal().toFixed(2));
    } else if (saldoTotal() < 0) {
        console.log('negativo: R$ '+saldoTotal().toFixed(2));
    }
}