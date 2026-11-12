// Criei um arquivo chamado funcoes.js:
// Chamando a função scoreCredito:
import { scoreCredito } from './funcoes.js';

// Pegando as variáveis (DOM):
const txtValorEmprestimo = window.document.getElementById(`valor`);
const txtScore = window.document.getElementById(`score`);
// Agora pensei em pegar o Select pelo id:
const txtParcelas = window.document.getElementById(`parcelas`)

// Criando a variável mostrar para chamar a div no HTML:
const tela = window.document.getElementsByClassName(`tela`)[0];

// Criando a variável botão:
const btnSimular = window.document.getElementById(`btn-simular`);

btnSimular.addEventListener(`click`, (e) => {
    if ((!txtValorEmprestimo.value) || (!txtParcelas.value)) {
        alert(`Por favor, preencha todos os campos!`);
        return;
    }

    // Peguei o valor de cada uma das entradas:
    let ValorEmprestimo = Number(txtValorEmprestimo.value);
    let score = Number(txtScore.value);
    let parcelas = Number(txtParcelas.value);

    const resultado = scoreCredito(score, parcelas, ValorEmprestimo);
    tela.innerHTML = `${resultado}`;
});

