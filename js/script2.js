// Classe JavaScript separada
class MinhaClasse {
    constructor() {
        this.formulario = document.getElementById('meuFormulario');
        this.resultados = document.getElementById('resultados');

        // Adicionar um evento de envio ao formulário
        this.formulario.addEventListener('submit', this.enviarValores.bind(this));
    }

    enviarValores(event) {
        event.preventDefault(); // Impedir que o formulário seja enviado normalmente

        // Criar um array para armazenar os valores dos inputs
        const valores = [];

        // Obter os valores dos 12 inputs
        for (let i = 1; i <= 12; i++) {
            const inputId = `input${i}`;
            const valorInput = document.getElementById(inputId).value;
            valores.push(valorInput);
        }

        // Limpar a lista de resultados
        this.resultados.innerHTML = '';

        // Exibir os valores na lista de resultados
        valores.forEach((valor, index) => {
            const resultadoItem = document.createElement('li');
            resultadoItem.textContent = `Input ${index + 1}: ${valor}`;
            this.resultados.appendChild(resultadoItem);
        });
    }
}

// Criar uma instância da classe após o carregamento da página
window.addEventListener('load', () => {
    const minhaInstancia = new MinhaClasse();
});
