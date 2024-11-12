document.addEventListener('DOMContentLoaded', function() {
    // Captura o evento de envio do formulário
    document.getElementById('ordemServico').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Captura os valores dos campos de "Tipo de Atendimento" e "Período Preferencial"
        const tipoAtendimento = document.getElementById('Título').value;  // Captura o valor de "Tipo de Atendimento"
        const periodoPreferencial = document.getElementById('Período').value;  // Captura o valor de "Período Preferencial"

        // Verificar as respostas dos dropdowns e exibir alertas se necessário
        const printOLT = document.getElementById('printOLT').value;
        const ajustouControladora = document.getElementById('ajustouControladora').value;

        if (printOLT === 'nao') {
            alert('Então Anexe o Print!');
            return; // Impede o envio do formulário
        }

        if (ajustouControladora === 'nao') {
            alert('Então ajuste a controladora!');
            return; // Impede o envio do formulário
        }

        // Coleta os dados do formulário
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Adiciona os valores de "Tipo de Atendimento" e "Período Preferencial" ao objeto data
        data['Tipo de Atendimento'] = tipoAtendimento;
        data['Período Preferencial'] = periodoPreferencial;

        // Exibe os dados preenchidos no formulário (para demonstração)
        const resultados = document.getElementById('resultados');
        resultados.innerHTML = ''; // Limpa resultados anteriores
        for (let [key, value] of Object.entries(data)) {
            const listItem = document.createElement('p');
            listItem.textContent = capitalizeWords(`${key}: ${value}`);
            resultados.appendChild(listItem);
        }

        // Limpar todos os campos do formulário após gerar os resultados
        this.reset(); // Limpa todos os campos
        document.getElementById('telefoneFields').innerHTML = ''; // Limpa campos de telefone
        document.getElementById('equipamentoFields').innerHTML = ''; // Limpa campos de equipamento
    });

    // Função para adicionar novos campos de telefone
    document.getElementById('addTelefone').addEventListener('click', function() {
        const telefoneFields = document.getElementById('telefoneFields');
        const telefoneInput = document.createElement('input');
        telefoneInput.type = 'text';
        telefoneInput.classList.add('box');
        telefoneInput.name = 'telefone';
        telefoneInput.placeholder = 'Telefone Adicional';
        telefoneFields.appendChild(telefoneInput);
    });

    // Função para adicionar novos campos de equipamento
    document.getElementById('addEquipamento').addEventListener('click', function() {
        const equipamentoFields = document.getElementById('equipamentoFields');
        const equipamentoInput = document.createElement('input');
        equipamentoInput.type = 'text';
        equipamentoInput.classList.add('box');
        equipamentoInput.name = 'equipamento';
        equipamentoInput.placeholder = 'Equipamento Adicional';
        equipamentoFields.appendChild(equipamentoInput);
    });
});

// Função para capitalizar as primeiras letras de cada palavra
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
