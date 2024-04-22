let spanAviso = document.getElementById('avisoSpan');
let spanNome = document.getElementById('preencherNome');
let spanArea = document.getElementById('preencherArea');
// inputs, selects e textArea;
let nome = document.getElementById('nome');
let textArea = document.getElementById('textAreaFlutuante');
let area = document.getElementById('floatingArea');
let motivoContato = document.getElementById('motivoContato');

// Botões;
const btnRegistro = document.getElementById('btnRegistro');
const btnRecortar = document.getElementById('btnRecortar');
const btnCopiar = document.getElementById('btnCopiar');
const btnApagar = document.getElementById('btnApagar');

// Funções de evento de click;
btnRegistro.addEventListener('click', () => {

    if (nome.value !== '' && area.value !== '') {
        let texto = `< ${nome.value} | ${area.value} | AlmMCZ > ${motivoContato.value}`;

        textArea.value = ''
        textArea.value = texto
        console.log(`< ${nome.value} | ${area.value} | AlmMCZ > ${motivoContato.value}`);
        spanNome.innerHTML = '';
        spanArea.innerHTML = '';
    } else {
        spanNome.innerHTML = nome.value === '' ? 'Campo obrigatório' : '';
        spanArea.innerHTML = area.value === '' ? 'Campo obrigatório' : '';
    }
    atualizarEstadoBtn(btnCopiar);
    atualizarEstadoBtn(btnRecortar);
    atualizarEstadoBtn(btnApagar);
});

btnRecortar.addEventListener('click', () => {
    manipularClipboard('cut', 'Recortado !')
});

btnCopiar.addEventListener('click', () => {
    manipularClipboard('copy', 'Copiado !')
});

btnApagar.addEventListener('click', () => {
    manipularClipboard('delete', 'Apagado !')
});

textArea.addEventListener('input', () => {
    atualizarEstadoBtn(btnCopiar);
    atualizarEstadoBtn(btnRecortar);
    atualizarEstadoBtn(btnApagar);
});

function atualizarEstadoBtn(btn) {
    if (textArea.value !== '') {
        btn.removeAttribute('disabled');
    } else {
        btn.setAttribute('disabled', 'disabled');
    }
}

function avisoSpan(texto) {
    spanAviso.innerHTML = `${texto}`
}

function manipularClipboard(action, mensagem) {
    textArea.select();
    document.execCommand(action);
    avisoSpan(mensagem)
    setTimeout(() => {
        avisoSpan('');
    }, 3000);
}