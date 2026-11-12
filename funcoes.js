export function scoreCredito(score, parcela, valor) {

    // 1. Criamos o objeto que guarda o estado da simulação
    const emprestimo = {
        scr: score,
        parc: parcela,
        vlr: valor,
        tx: 0,
        status: true
    };

    // 2. Aplicamos as regras de negócio alterando diretamente as propriedades do objeto
    if (emprestimo.scr < 300) {
        emprestimo.status = false;
        return `<p><strong>Status: </strong>Reprovado. Empréstimo recusado, Score muito baixo!</p>`;

    } else if (emprestimo.scr <= 500) {
        if ((emprestimo.vlr > 2000) || (emprestimo.parc > 12)) {
            return `<p>O valor de R$ ${emprestimo.vlr} não está disponível, mas temos uma oferta de R$ 2.000,00 em 12x!</p>`;
        } else {
            emprestimo.tx = 0.12; // 12% ao mês
        }

    } else if (emprestimo.scr <= 600) {
        emprestimo.tx = 0.065; // 6.5% ao mês

    } else if (emprestimo.scr <= 700) {
        if ((emprestimo.vlr <= 10000) && (emprestimo.parc <= 24)) {
            emprestimo.tx = 0.05; // 5% ao mês
        }

    } else if (emprestimo.scr <= 1000) {
        if ((emprestimo.vlr <= 50000) && (emprestimo.parc <= 48)) {
            emprestimo.tx = 0.035; // 3.5% ao mês
        }
    } else {
        emprestimo.status = false;
        return `<p>Não foi possível calcular, score inválido.</p>`;
    }

    // Montante = Valor * (1 + taxa) elevado ao número de parcelas
    let montante = emprestimo.vlr * Math.pow((1 + emprestimo.tx), emprestimo.parc);
    let valorParcela = montante / emprestimo.parc;
    
    // Transformando a taxa para exibição em porcentagem (ex: 0.05 vira 5.0%)
    let taxaPercentual = emprestimo.tx * 100;

    // 4. (Opcional) Podemos usar a desestruturação aqui no final para extrair as variáveis do objeto já preenchido!
    const { scr, parc, vlr, status } = emprestimo;

    return `
        <p><strong>Score: </strong>${scr}</p>
        <p><strong>Parcelado em: </strong>${parc}x</p>
        <p><strong>Valor do empréstimo: </strong>R$ ${vlr.toFixed(2)}</p>
        <p><strong>Valor da Parcela: </strong>R$ ${valorParcela.toFixed(2)} por mês</p>
        <p><strong>Taxa por mês: </strong>${taxaPercentual.toFixed(1)}%</p>
        <p><strong>Status: </strong>${status ? `Aprovado.` : `Reprovado.`}</p>
    `;
}