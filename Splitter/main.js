const conta = document.getElementById('bill');

const precoReal = document.getElementById('precoReal');

const numeroDePessoas = document.getElementById('numberOfPeople');

const precoGorgeta = document.querySelector('#precoRealGorgeta');

const porcentagemGorgeta = document.querySelectorAll('.porcent');

const btnCalcula = document.getElementById('btnCalcula');

const btnReset = document.querySelector('.resetbtn');

const valorFinal = document.querySelector('#ultimoValor');



function calculaTotal() {
    
    precoReal.innerHTML = 'R$ ' + (conta.value / numeroDePessoas.value).toFixed(2)
    valorFinal.innerHTML = (parseInt(precoReal.innerHTML.replace('R$ ', '')) + parseFloat(precoGorgeta.innerHTML.replace('R$ ', ''))).toFixed(2);

}

porcentagemGorgeta.forEach((porcent) => {
    porcent.addEventListener("click", () => {
        precoGorgeta.innerHTML = 'R$ ' + (porcent.value/100*conta.value).toFixed(2);
        

    })
});

function limpaValores(){
    btnReset.addEventListener('click',() =>{
        conta.value = 0
        numeroDePessoas.value = 0
        precoReal.innerText = 'R$ '+ 0
        precoGorgeta.innerText = 'R$ '+0
        valorFinal.innerText = 0
    })
}


