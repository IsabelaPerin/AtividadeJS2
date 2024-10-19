let idade = prompt(`Qual é a sua idade?`)

if (idade <18){
    alert(`Você é menor de idade.`)
}

else if (idade >=18 && idade <60) {
    alert(`Você é um adulto.`)
}

else if (idade >= 60){
    alert(`Você é um idoso.`)
}