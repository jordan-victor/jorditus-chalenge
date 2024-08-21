document.getElementById("definir").addEventListener('click', ()=>{
    numero = Math.floor(Math.random() * 101);//Gerando número aleatório
    document.getElementById("section2").style.display = "block"
    document.getElementById("intervalo").innerHTML = `(O número gerado está entre 0 e 100)`
}) 





document.getElementById("adivinhar").addEventListener('click', ()=>{
    let tentativa = document.getElementById("tentativa").value
    let tentativas = document.querySelector("#resultado")
    let nTentativas = document.getElementById("nTentativas")

    if(Number(numero) > Number(tentativa)){
        let novaTentativa = document.createElement("p")
        novaTentativa.setAttribute('name', 'tentativa')
        novaTentativa.innerHTML = `O número é maior que ${tentativa} &#128546`
        tentativas.appendChild(novaTentativa)

    }
    else if(Number(numero) < Number(tentativa)){
        let novaTentativa = document.createElement("p")
        novaTentativa.setAttribute('name', 'tentativa')
        novaTentativa.innerHTML = `O número é menor que ${tentativa} &#128546`
        tentativas.appendChild(novaTentativa)
    }
    else{
        let novaTentativa = document.createElement("p")
        novaTentativa.setAttribute('name', 'tentativa')
        novaTentativa.style.color = "green"
        novaTentativa.style.fontSize = "20px"
        novaTentativa.innerHTML = `Você acertou!, o número era ${numero} &#128513`
        tentativas.appendChild(novaTentativa)
    }

    let todasTentativas = document.getElementsByName("tentativa").length
    nTentativas.innerHTML = todasTentativas
})