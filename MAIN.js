const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;
formEValido = validaNome(nomeBeneficiario.value);


function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}




form.addEventListener('submit', function(e) {
    e.preventDefault();
    const numuerContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta <b>${numuerContaBeneficiario.value}</b>` 
    if (!formEValido){
        alert('Por favor revise os campos!')
        
    } else{
        const conteinermensagemsucesso = document.querySelector('.success-message'); 
        conteinermensagemsucesso.innerHTML = mensagemSucesso;
        conteinermensagemsucesso.style.display = 'block'
        nomeBeneficiario.value = '';
        numuerContaBeneficiario.value = '';
        valorDeposito.value = '';
    }
})





nomeBeneficiario.addEventListener('change', function(e){
    console.log(e.target.value)
    formEValido = validaNome(e.target.value);
    if (!formEValido){
        nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.erro-nome').style.display = 'block'
    }else{
        document.querySelector('.erro-nome').style = 'none'
        nomeBeneficiario.style = 'none'
    }
})


console.log(form);
