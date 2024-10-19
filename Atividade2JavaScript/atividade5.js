let dia = parseFloat(prompt(`Digite um número de 1 a 7 para saber qual dia da semana é hoje.`))

switch (dia) {
    case 1:
        alert(`Hoje é domingo.`)
        break;

    case 2:
        alert(`Hoje é segunda-feira.`)
        break;

    case 3:
        alert(`Hoje é terça-feira.`)
        break;

    case 4:
        alert(`Hoje é quarta-feira.`)
        break;

    case 5:
        alert(`Hoje é quinta-feira.`)
        break;

    case 6:
        alert(`Hoje é Sexta-feira.`)
        break;

    case 7:
        alert(`Hoje é Sábado.`)
        break;


    default:
        alert(`Resposta Inválida, insira um número de 1 a 7.`)
        break;
}