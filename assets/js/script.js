const input = document.getElementById('nome')
const btn = document.getElementById('btn')
const btnLimpar = document.getElementById('limpar')
const recortar = document.getElementById('btnRecortar').addEventListener('click', executeRecortar)
const copiar = document.getElementById('btnCopiar').addEventListener('click', executeCopiar)
const mc = document.getElementById('mcontato')
let textarea = document.getElementById('textarea')
input.focus()

function executeRecortar() {
    let textarea = document.getElementById('textarea')
    textarea.select();
    document.execCommand('copy')
    alert('Recortado')
    textarea.value = ''
}

function executeCopiar() {
    let textarea = document.getElementById('textarea')
    textarea.select();
    document.execCommand('copy')
    alert('Copiado')
}


btn.addEventListener('click', () => {
    textarea.value = ''
    if(nome.value == '' || area.value == '') {
        alert('Preencha todos os campos')
    } else {
        let texto = `< ${nome.value} | ${area.value} | AlmMcz > ${mc.value}`
        textarea.value += texto
    }

})

btnLimpar.addEventListener('click', () => {
    textarea.value = ''
})

// window.onbeforeunload = () => {
//     return confirm()
// }
