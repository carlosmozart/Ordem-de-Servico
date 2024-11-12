// Função para adicionar um campo de telefone
document.getElementById('addTelefone').addEventListener('click', function() {
    const telefoneFields = document.getElementById('telefoneFields');
    const telefoneDiv = document.createElement('div');
    telefoneDiv.classList.add('telefone-field');

    telefoneDiv.innerHTML = `
        <label for="telefone">Telefone:</label>
        <input type="text" class="box" name="telefone" placeholder="Informe outro telefone">
        <button type="button" class="remover" onclick="removeTelefone(this)">-</button>
    `;
    
    telefoneFields.appendChild(telefoneDiv);
});

// Função para remover um campo de telefone
function removeTelefone(button) {
    button.parentElement.remove();
}

// Função para adicionar um campo de equipamento
document.getElementById('addEquipamento').addEventListener('click', function() {
    const equipamentoFields = document.getElementById('equipamentoFields');
    const equipamentoDiv = document.createElement('div');
    equipamentoDiv.classList.add('equipamento-field');

    equipamentoDiv.innerHTML = `
        <label for="modeloEquipamento">Modelo do Equipamento:</label>
        <input type="text" class="box" name="modeloEquipamento" placeholder="Informe o modelo do equipamento">
        <label for="serialEquipamento">Nº de Série do Equipamento:</label>
        <input type="text" class="box" name="serialEquipamento" placeholder="Informe o número de série">
        <button type="button" class="remover" onclick="removeEquipamento(this)">-</button>
    `;
    
    equipamentoFields.appendChild(equipamentoDiv);
});

// Função para remover um campo de equipamento
function removeEquipamento(button) {
    button.parentElement.remove();
}

// Função para enviar o formulário
document.getElementById('ordemServico').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

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

    // Capturar valores de "Tipo de Atendimento" e "Período Preferencial"
    const tipoAtendimento = document.getElementById('tipoAtendimento').value;
    const periodoPreferencial = document.getElementById('periodoPreferencial').value;

    // Coleta os dados do formulário
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Adiciona os valores de "Tipo de Atendimento" e "Período Preferencial" ao objeto data
    data['Tipo de Atendimento'] = tipoAtendimento;
    data['Período Preferencial'] = periodoPreferencial;

    console.log(data); // Aqui você pode fazer a requisição para a API ou processar os dados de outra maneira

    // Exibindo os dados preenchidos no formulário (para demonstração)
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = ''; // Limpar resultados anteriores
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

// Função para copiar os dados para a área de transferência
document.getElementById('btn-copiar').addEventListener('click', function() {
    const resultados = document.getElementById('resultados');
    const textToCopy = resultados.innerText || resultados.textContent;

    navigator.clipboard.writeText(textToCopy).then(function() {
        alert('Dados copiados com sucesso!');
    }).catch(function() {
        alert('Falha ao copiar os dados.');
    });
});

// Função para capitalizar a primeira letra de cada palavra
function capitalizeWords(str) {
    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}
