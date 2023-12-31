
class GetValores {
    constructor() {
        this.formulario = document.getElementById('ordemServico');
        this.resultados = document.getElementById('resultados');
        this.formulario.addEventListener('submit', this.enviarTextos.bind(this));
        this.botaoCopiar = document.getElementById("btn-copiar");
        this.minhaLista = document.getElementById("resultados");
        this.botaoCopiar.addEventListener("click", () => this.copiarParaAreaDeTransferencia());
    }

    enviarTextos(event) {
        event.preventDefault();

        const protocolo = document.getElementById('protocolo').value.replace(/\n/g, '<br>');
        const descricao = document.getElementById('descricao').value;
        const endereco = document.getElementById('endereco').value;
        const telefone1 = document.getElementById('telefone1').value;
        const telefone2 = document.getElementById('telefone2').value;
        const telefone3 = document.getElementById('telefone3').value;
        const ppoe_login = document.getElementById('ppoe_login').value;
        const ppoe_senha = document.getElementById('ppoe_senha').value;
        const vlan = document.getElementById('vlan').value;
        const equipamento1 = document.getElementById('equipamento1').value;
        const equipamento2 = document.getElementById('equipamento2').value;
        const potencia = document.getElementById('potencia').value;
        const localizacao = document.getElementById('localizacao').value;
        const referencia = document.getElementById('referencia').value;
        const modelo1 = document.getElementById('modelo1').value;
        const modelo2 = document.getElementById('modelo2').value;
        const contrato = document.getElementById('contrato').value;
        const titulo = document.getElementById('titulo').value;
        const periodo = document.getElementById('periodo').value;

        this.resultados.innerHTML = '';

        document.getElementById('protocolo').value = '';
        document.getElementById('descricao').value = '';
        document.getElementById('endereco').value = '';
        document.getElementById('telefone1').value = '';
        document.getElementById('telefone2').value = '';
        document.getElementById('telefone3').value = '';
        document.getElementById('ppoe_login').value = '';
        document.getElementById('ppoe_senha').value = '';
        document.getElementById('vlan').value = '';
        document.getElementById('equipamento1').value = '';
        document.getElementById('equipamento2').value = '';
        document.getElementById('potencia').value = '';
        document.getElementById('localizacao').value = '';
        document.getElementById('referencia').value = '';
        document.getElementById('modelo1').value = '';
        document.getElementById('modelo2').value = '';
        document.getElementById('contrato').value = '';
        document.getElementById('titulo').value = '';
        document.getElementById('periodo').value = '';


        const resultadoTitulo = document.createElement('li');
        resultadoTitulo.textContent = `Tipo de Atendimento: ${titulo}`;
        this.resultados.appendChild(resultadoTitulo);

        const resultadoLinha7 = document.createElement('li');
        resultadoLinha7.textContent = `===========================`;
        this.resultados.appendChild(resultadoLinha7);

        const resultadoPeriodo = document.createElement('li');
        resultadoPeriodo.textContent = `Preferência de Turno: ${periodo}`;
        this.resultados.appendChild(resultadoPeriodo);

        const resultadoLinha8 = document.createElement('li');
        resultadoLinha8.textContent = `===========================`;
        this.resultados.appendChild(resultadoLinha8);

        const resultadoProtocolo = document.createElement('li');
        resultadoProtocolo.textContent = `Protocolo: ${protocolo}`;
        this.resultados.appendChild(resultadoProtocolo);

        const resultadoLinhaB = document.createElement('li');
        resultadoLinhaB.textContent = ` `;
        this.resultados.appendChild(resultadoLinhaB);

        const resultadoLinha = document.createElement('li');
        resultadoLinha.textContent = `===========================`;
        this.resultados.appendChild(resultadoLinha);

        const resultadoDescricao = document.createElement('li');
        resultadoDescricao.textContent = `Descrição do Problema: ${descricao}`;
        this.resultados.appendChild(resultadoDescricao);

        const resultadoLinhaB2 = document.createElement('li');
        resultadoLinhaB2.textContent = ` `;
        this.resultados.appendChild(resultadoLinhaB2);

        const resultadoLinha2 = document.createElement('li');
        resultadoLinha2.textContent = `===========================`;
        this.resultados.appendChild(resultadoLinha2);

        const resultadoEndereco = document.createElement('li');
        resultadoEndereco.textContent = `Endereço: ${endereco}`;
        this.resultados.appendChild(resultadoEndereco);

        const resultadoReferencia = document.createElement('li');
        resultadoReferencia.textContent = `Ponto de Referência: ${referencia}`;
        this.resultados.appendChild(resultadoReferencia);

        const resultadoLinhaB6 = document.createElement('li');
        resultadoLinhaB6.textContent = ` `;
        this.resultados.appendChild(resultadoLinhaB6);

        const resultadoTelefone1 = document.createElement('li');
        resultadoTelefone1.textContent = `Telefone: ${telefone1}`;
        this.resultados.appendChild(resultadoTelefone1);

        const resultadoTelefone2 = document.createElement('li');
        resultadoTelefone2.textContent = `Telefone: ${telefone2}`;
        this.resultados.appendChild(resultadoTelefone2);

        const resultadoTelefone3 = document.createElement('li');
        resultadoTelefone3.textContent = `Telefone: ${telefone3}`;
        this.resultados.appendChild(resultadoTelefone3);

        const resultadoLinhaB3 = document.createElement('li');
        resultadoLinhaB3.textContent = ` `;
        this.resultados.appendChild(resultadoLinhaB3);

        const resultadoLinha3 = document.createElement('li');
        resultadoLinha3.textContent = `===========================`;
        this.resultados.appendChild(resultadoLinha3);

        const resultadoLocalizacao = document.createElement('li');
        resultadoLocalizacao.textContent = `Geolocalização: ${localizacao}`;
        this.resultados.appendChild(resultadoLocalizacao);

        const resultadoLinhaB4 = document.createElement('li');
        resultadoLinhaB4.textContent = ` `;
        this.resultados.appendChild(resultadoLinhaB4);

        const resultadoLinha4 = document.createElement('li');
        resultadoLinha4.textContent = `===========================`;
        this.resultados.appendChild(resultadoLinha4);

        const resultadoContrato = document.createElement('li');
        resultadoContrato.textContent = `Contrato: ${contrato}`;
        this.resultados.appendChild(resultadoContrato);

        const resultadoPpoeLogin = document.createElement('li');
        resultadoPpoeLogin.textContent = `Login PPOE: ${ppoe_login}`;
        this.resultados.appendChild(resultadoPpoeLogin);

        const resultadoPpoeSenha = document.createElement('li');
        resultadoPpoeSenha.textContent = `Senha PPOE: ${ppoe_senha}`;
        this.resultados.appendChild(resultadoPpoeSenha);

        const resultadoVlan = document.createElement('li');
        resultadoVlan.textContent = `VLAN: ${vlan}`;
        this.resultados.appendChild(resultadoVlan);

        const resultadoLinhaB5 = document.createElement('li');
        resultadoLinhaB5.textContent = ` `;
        this.resultados.appendChild(resultadoLinhaB5);

        const resultadoLinha5 = document.createElement('li');
        resultadoLinha5.textContent = `===========================`;
        this.resultados.appendChild(resultadoLinha5);

        const resultadoModelo1 = document.createElement('li');
        resultadoModelo1.textContent = `Modelo 1: ${modelo1}`;
        this.resultados.appendChild(resultadoModelo1);

        const resultadoEquipamento1 = document.createElement('li');
        resultadoEquipamento1.textContent = `Equipamento 1: ${equipamento1}`;
        this.resultados.appendChild(resultadoEquipamento1);

        const resultadoPotencia = document.createElement('li');
        resultadoPotencia.textContent = `Potência: ${potencia}`;
        this.resultados.appendChild(resultadoPotencia);


        const resultadoModelo2 = document.createElement('li');
        resultadoModelo2.textContent = `Modelo 2: ${modelo2}`;
        this.resultados.appendChild(resultadoModelo2);

        const resultadoEquipamento2 = document.createElement('li');
        resultadoEquipamento2.textContent = `Equipamento 2: ${equipamento2}`;
        this.resultados.appendChild(resultadoEquipamento2);

    }


    copiarParaAreaDeTransferencia() {

        const listaTexto = Array.from(this.minhaLista.querySelectorAll("li"))
            .map(item => item.textContent)
            .join("\n");

        const textarea = document.createElement("textarea");
        textarea.value = listaTexto;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("Lista copiada para a área de transferência!");
    }


}

const checkboxes1 = document.querySelectorAll('input[name="anexo"]');
const checkboxes2 = document.querySelectorAll('input[name="controladora"]');
const mensagem = document.getElementById('mensagem');
const mensagem2 = document.getElementById('mensagem2');

checkboxes1.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        checkboxes1.forEach(otherCheckbox => {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });

        if (checkbox.value === 'nao' && checkbox.checked) {
            mensagem.textContent = 'Então anexe o print!';
            mensagem.style.display = 'block';
        } else {
            mensagem.textContent = '';
            mensagem.style.display = 'none';
        }
    });
});

checkboxes2.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        checkboxes2.forEach(otherCheckbox => {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });

        if (checkbox.value === 'no' && checkbox.checked) {
            mensagem2.textContent = 'Então ajuste a controladora!';
            mensagem2.style.display = 'block';
        } else {
            mensagem2.textContent = '';
            mensagem2.style.display = 'none';
        }
    });
});





window.addEventListener('load', () => {
    const minhaInstancia = new GetValores();
});

