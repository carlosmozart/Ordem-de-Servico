document.addEventListener('DOMContentLoaded', function() {
    // Captura o evento de envio do formulário
    document.getElementById('ordemServico').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Coleta os dados do formulário
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Captura os valores dos dropdowns
        const tipoAtendimento = document.getElementById('tipoatendimento').value;
        const periodo = document.getElementById('periodo').value;

        // Exibe os dados preenchidos no formulário
        const resultados = document.getElementById('resultados');
        resultados.innerHTML = ''; // Limpa resultados anteriores

        // Adiciona os valores dos dropdowns no topo do resultado
        const tipoAtendimentoItem = document.createElement('p');
        tipoAtendimentoItem.textContent = `Tipo de Atendimento: ${capitalizeFirstLetter(tipoAtendimento)}`;
        resultados.appendChild(tipoAtendimentoItem);

        const periodoItem = document.createElement('p');
        periodoItem.textContent = `Período: ${capitalizeFirstLetter(periodo)}`;
        resultados.appendChild(periodoItem);

        // Adiciona os campos ao resultado
        for (let [key, value] of Object.entries(data)) {
            const listItem = document.createElement('p');
            listItem.textContent = `${capitalizeFirstLetter(key)}: ${value}`;
            resultados.appendChild(listItem);
        }

        // Limpa todos os campos após gerar os resultados
        this.reset();
        document.getElementById('telefoneFields').innerHTML = ''; // Limpa campos de telefone
        document.getElementById('equipamentoFields').innerHTML = ''; // Limpa campos de equipamento
    });

    // Função para adicionar novos campos de telefone
    document.getElementById('addTelefone').addEventListener('click', function() {
        const telefoneFields = document.getElementById('telefoneFields');
        const telefoneInputContainer = document.createElement('div');
        
        const telefoneInput = document.createElement('input');
        telefoneInput.type = 'text';
        telefoneInput.classList.add('box');
        telefoneInput.name = 'telefone';
        telefoneInput.placeholder = 'Telefone Adicional';
        
        const removeButton = document.createElement('button');
        removeButton.textContent = '-';
        removeButton.type = 'button';
        removeButton.classList.add('button');
        removeButton.addEventListener('click', function() {
            telefoneFields.removeChild(telefoneInputContainer);
        });
        
        telefoneInputContainer.appendChild(telefoneInput);
        telefoneInputContainer.appendChild(removeButton);
        telefoneFields.appendChild(telefoneInputContainer);
    });

    // Função para adicionar novos campos de equipamento
    document.getElementById('addEquipamento').addEventListener('click', function() {
        const equipamentoFields = document.getElementById('equipamentoFields');
        const equipamentoInputContainer = document.createElement('div');
        
        const equipamentoInput = document.createElement('input');
        equipamentoInput.type = 'text';
        equipamentoInput.classList.add('box');
        equipamentoInput.name = 'equipamento';
        equipamentoInput.placeholder = 'Equipamento Adicional';
        
        const removeButton = document.createElement('button');
        removeButton.textContent = '-';
        removeButton.type = 'button';
        removeButton.classList.add('button');
        removeButton.addEventListener('click', function() {
            equipamentoFields.removeChild(equipamentoInputContainer);
        });
        
        equipamentoInputContainer.appendChild(equipamentoInput);
        equipamentoInputContainer.appendChild(removeButton);
        equipamentoFields.appendChild(equipamentoInputContainer);
    });

    // Função de copiar dados para a área de transferência
    document.getElementById('btn-copiar').addEventListener('click', function() {
        const resultados = document.getElementById('resultados');
        const textToCopy = Array.from(resultados.children)
            .map(child => child.textContent + '\n') // Garante que cada campo tenha uma linha em branco
            .join('\n');

        // Copiar para a área de transferência
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Dados copiados!');
        }).catch(err => {
            alert('Erro ao copiar: ' + err);
        });
    });
});

// Função para garantir que a primeira letra seja maiúscula
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Alterna o modo escuro
document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.container, .label, .box, .descricao, .geo, .button')
        .forEach(element => element.classList.toggle('dark-mode'));
    
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});
