const form = document.getElementById('form-contato');
const nome = [];
const telefone = [];

let linhas = ' ';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContlato = document.getElementById('telefone-contato');

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContlato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    
    inputNomeContato.value = '';
    inputTelefoneContlato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}