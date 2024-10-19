let faixaEtaria; 

let idade = 17;

switch (true) {
    case (idade >= 0 && idade <= 12):
        faixaEtaria = "Criança"
        console.log(`Você é uma criança.`);
        break;

    case (idade >= 13 && idade <= 17):
        faixaEtaria = "Adolescente"
        console.log(`Você é um(a) adolescente.`);
        break;

    case (idade >= 18 && idade <= 64):
        faixaEtaria = "Adulto"
        console.log(`Você é um(a) adulto.`);
        break;

    case (idade >= 65):
        faixaEtaria = "Idoso"
        console.log(`Você é um(a) idosa.`);
        break;

    default:
        console.log(`Idade Inválida.`);
        break;
}

