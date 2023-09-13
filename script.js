const input = document.getElementById('nome')
const btn = document.getElementById('btn')
const btnLimpar = document.getElementById('limpar')
const copiar = document.getElementById('btnCopiar').addEventListener('click', executeCopiar)
const area = document.getElementById('area')
const mc = document.getElementById('mcontato')
input.focus()

function executeCopiar() {
    let textarea = document.getElementById('textarea')
    textarea.select();
    textarea.setSelectionRange(0, 9999999)
    document.execCommand("copy")
    alert("Copiado")
    textarea.value = "" 
    
}

let textarea = document.getElementById('textarea')

btn.addEventListener('click', () => {
    let texto = `< ${nome.value} | ${area.value} | AlmMcz > ${mc.value}`
    textarea.value += texto

})

btnLimpar.addEventListener('click', () => {
    textarea.value = ''
})

// btn.addEventListener('click', () => {
//     let texto = document.documentElement
//     texto.innerHTML = `<textarea
//     >< ${nome.value} | ${area.value} | AlmMcz > ${mc.value}</textarea>`
// })
