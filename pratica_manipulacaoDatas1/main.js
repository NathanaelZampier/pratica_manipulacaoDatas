// let data = new Date();

// console.log(data)

// let ano = data.getFullYear()

// console.log(ano)

// let mes = data.getMonth()

// console.log(mes)

// const mesesDoAno = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

// let mesEscrito = mesesDoAno[data.getMonth()];

// console.group(mesEscrito)

// let diaMes = data.getDate();

// console.log(diaMes)

// let diaSemana = data.getDay();
// console.log(diaSemana)

// const diasDaSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'];

// let diaEscrito = diasDaSemana[data.getDay()];

// console.log(diaEscrito)

// let hora = data.getHours();

// console.log(hora)


// let minutos = data.getMinutes();

// console.log(minutos)

// let segundos = data.getSeconds();

// console.log(segundos)

// let miliSegundos = data.getMilliseconds();

// console.log(miliSegundos)

// let dataBR = data.toLocaleString('pt-BR', {timeStyle: 'short'});

// console.log(dataBR)

// d = new Date();
// diaMes = d.getDate();
// mes = d.getMonth() + 1;
// ano = d.getFullYear();

// function addZero(x) {
//     return x < 10 ? '0' + x : '' + x
// }

// let dataPadraoBR = addZero(diaMes) + ' / ' + addZero(mes) + ' / ' + addZero(ano);

// console.log(dataPadraoBR)

// let hoje  = new Date(); 
// let vencimento = new Date(2022, 0, 15);

// if (hoje > vencimento) {
//     console.log('sua conta está vencida!');
// } else {
//     console.log('ainda não venceu, tudo certo')
// }


// let dataInicial = new Date();
// let DataFinal = new Date(2022, 11, 31);


// let diferencaTempo = DataFinal.getTime() - dataInicial.getTime();

// let diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

// console.log(diferencaDias)

// const agora = new Date();

// console.log(typeof agora)

// const data = new Date(2026, 8, 23, 18, 30, 0);

// console.log(data);

// const agora = new Date();

// console.log(agora)


// console.log(mes)


// console.log(diaMes)

// const diaSemana = agora.getDay()

// console.log(diaSemana)


// console.log(hora)


// console.log(minutos)


// console.log(segundos)


// console.log(`${diaMes} / ${mes} / ${ano}`)

// let segundos = agora.getSeconds()

// if (segundos < 10) {
//     segundos = `0${segundos}`;
// }

// let minutos = agora.getMinutes()

// if (minutos < 10) {
//     minutos = `0${minutos}`;
// }

// const hora = agora.getHours()

// const ano = agora.getFullYear();

// console.log(ano)

// let mes = agora.getMonth() + 1

// mes = mes < 10 ? `0${mes}` : `${mes}`

// console.log(mes)

// let diaMes = agora.getDate()

// if (diaMes < 10) {
//     diaMes = `0${diaMes}`
// }

// const diaSemana = agora.getDay()

// console.log(diaSemana)

// let nomeDiaSemana

// switch (diaSemana) {
//     case 0:
//         nomeDiaSemana = `hoje é domingo`

//         break;

//     case 1: 
//         nomeDiaSemana = `hoje é segunda`
//         break;

//     case 2: 
//         nomeDiaSemana = `hoje é terça`
//         break;

//     case 3: 
//         nomeDiaSemana = `hoje é quarta`
//         break;

//     case 4: 
//         nomeDiaSemana = `hoje é quinta`
//         break

//     case 5: 
//         nomeDiaSemana = `hoje é sexta`
//         break

//     case 6: 
//         nomeDiaSemana = `hoje é sabado`
//         break

//     default: 
//     console.log('dia inválido')
// }



// console.log(nomeDiaSemana)
// console.log(`Data: ${diaMes} / ${mes} / ${ano}`)
// console.log(`Horário: ${hora} : ${minutos} : ${segundos}`)


// function obterDiaSemana(numero) {
//         switch(numero) {
//         case 0: 
//         return `domingo`;

//         case 1:
//         return `segunda-feira`;

//         case 2:
//         return `terca-feira`;

//         case 3:
//         return `quarta-feira`;

//         case 4: 
//         return `quinta-feira`;

//         case 5:
//         return `sexta-feira`;

//         case 6:
//         return `sabado`;

//         default: 
//         console.log('dia inválido')
//     }
// }

// const dia = obterDiaSemana(5)

// console.log(dia)


const agora = new Date()

const ano = agora.getFullYear()
const mes = agora.getMonth() + 1
const dia = agora.getDate()
const diaSemana = agora.getDay()



function obterNomeDia(numero) {
    switch(numero) {
        case 0 : 
        return 'domingo';

        case 1 : 
        return 'segunda-feira';

        case 2: 
        return 'terça-feira';

        case 3:
        return 'quarta-feira';

        case 4: 
        return 'quinta-feira';

        case 5:
        return 'sexta-feira';

        case 6 :
        return 'sabado';

        default:
        return 'dia inválido'
    }

}

let mesFormatado

if (mes < 10) {
    mesFormatado = `0${mes}`
} else {
    mesFormatado = `${mes}`
}

let diaFormatado

if (dia < 10) {
    diaFormatado = `0${dia}`
} else {
    diaFormatado = `${dia}`
}

console.log(`${obterNomeDia(diaSemana)} ${diaFormatado} / ${mesFormatado} / ${ano}`)



const dataFutura = new Date()



dataFutura.setDate(dataFutura.getDate() + 10)


const dataFuturaDia = dataFutura.getDate()
const dataFuturaMes = dataFutura.getMonth() + 1
const dataFuturaAno = dataFutura.getFullYear()
const diaSemanaFutura = dataFutura.getDay()

console.log(dataFutura)

console.log(obterNomeDia(diaSemanaFutura))

let mesFormatadoFuturo

if (dataFuturaMes < 10) {
    mesFormatadoFuturo = `0${dataFuturaMes}`
} else {
    mesFormatadoFuturo = `${dataFuturaMes}`
}

let diaFormatadoFuturo

if (dataFuturaDia < 10) {
    diaFormatadoFuturo = `0${dataFuturaDia}`
} else {
    diaFormatadoFuturo = `${dataFuturaDia}`
}


console.log(`${obterNomeDia(diaSemanaFutura)} ${diaFormatadoFuturo} / ${mesFormatadoFuturo} / ${dataFuturaAno}`)








