const btnCopiar = document.getElementById('btnCopiar');
const formulario = document.getElementById('form');
const cod = document.getElementById('cod')
let textarea = document.getElementById('textArea');
let obrigatorio = document.getElementById('vazio');
const btnRegistro = document.getElementById('btnRegistro');
const dataI = document.getElementById('dataI');
const dataA = document.getElementById('dataA');
const periodoM = document.getElementById('periodoM');
const periodoT = document.getElementById('periodoT');

btnCopiar.addEventListener('click', () => {
    textarea.select();
    document.execCommand('copy');
    alert('Copiado');
})



btnRegistro.addEventListener('click', () => {
    if(formulario.value == ''){
        obrigatorio.innerHTML = `Obrigatório`
    } else {
        textarea.value = ''
        // Converte a data Icare para o formato dd/mm/aaaa
        let partesI = dataI.value.split("-");
        let dataIFormatada = partesI[2] + '/' + partesI[1] + '/' + partesI[0];
    
        let partesC = dataA.value.split("-");
        let dataCFormatada = partesC[2] + '/' + partesC[1] + '/' + partesC[0];
    
        const periodo = periodoM.checked ? 'Manhã' : 'Tarde'
    
        // Escreve no TextArea do html
        let texto = `Priorização\nCódigo: ${cod.value}\nTier: ${tier.value}\nData do Icare: ${dataIFormatada}\nData acordada: ${dataCFormatada}\nPeríodo: ${periodo}\nOrdem de Serviço: ${os.value}\nProtocolo: ${protocol.value}\nTipo de Ordem de Serviço: ${tOS.value}`;
    
        textarea.value += texto
    }
})


btnLimpar.addEventListener('click', () => {
    textarea.value = ''
})

window.onbeforeunload = () => {
    return confirm()
}