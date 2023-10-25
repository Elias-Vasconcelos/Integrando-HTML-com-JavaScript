const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();
    
    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numuerContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente ${nomeBeneficiario.value} - conta ${numuerContaBeneficiario.value}` 
    
    formEValido = validaNome(nomeBeneficiario.value);
    if (!formEValido){
        alert('Por favor revise os campos!')
    } else{
        alert (mensagemSucesso);
        nomeBeneficiario.value = '';
        numuerContaBeneficiario.value = '';
        valorDeposito.value = '';
    }
})

console.log(form);
