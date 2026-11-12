# Simulador de Empréstimo Bancário

Projeto desenvolvido para treinar lógica de programação e controle de fluxo em JavaScript, aplicando regras de negócio reais para análise de crédito. Este é o **Projeto 1** da minha jornada focada nos pilares da programação.

## O que o projeto faz?
O usuário insere o valor desejado, o seu score de crédito e escolhe a quantidade de parcelas. O sistema processa essas informações através de regras condicionais e retorna:
- Se o empréstimo foi aprovado ou reprovado.
- Contrapropostas automáticas baseadas no perfil.
- O cálculo do valor da parcela mensal usando juros compostos.

## 💻 Tecnologias usadas
- **HTML5**: Estrutura da página.
- **CSS3**: Estilização com variáveis globais (`:root`) e Flexbox.
- **JavaScript (ES6+)**: Lógica, manipulação do DOM e arquitetura modular (`import/export`).

## Organização dos arquivos
```text
├── index.html     # Interface visual
├── style.css      # Estilos e variáveis de cores
├── script.js      # Captura de eventos e manipulação do DOM
└── funcoes.js     # Módulo isolado com as regras de negócio e cálculos