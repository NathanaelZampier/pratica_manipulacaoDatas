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

const agora = new Date();

// console.log(agora)


// console.log(mes)


// console.log(diaMes)

// const diaSemana = agora.getDay()

// console.log(diaSemana)


// console.log(hora)


// console.log(minutos)


// console.log(segundos)


// console.log(`${diaMes} / ${mes} / ${ano}`)

let segundos = agora.getSeconds()

if (segundos < 10) {
    segundos = `0${segundos}`;
}

let minutos = agora.getMinutes()

if (minutos < 10) {
    minutos = `0${minutos}`;
}

const hora = agora.getHours()

const ano = agora.getFullYear();

console.log(ano)

let mes = agora.getMonth() + 1

mes = mes < 10 ? `0${mes}` : `${mes}`

console.log(mes)

let diaMes = agora.getDate()

if (diaMes < 10) {
    diaMes = `0${diaMes}`
}

const diaSemana = agora.getDay()

console.log(diaSemana)

let nomeDiaSemana

switch (diaSemana) {
    case 0:
        nomeDiaSemana = `hoje é domingo`

        break;

    case 1: 
        nomeDiaSemana = `hoje é segunda`
        break;

    case 2: 
        nomeDiaSemana = `hoje é terça`
        break;

    case 3: 
        nomeDiaSemana = `hoje é quarta`
        break;

    case 4: 
        nomeDiaSemana = `hoje é quinta`
        break

    case 5: 
        nomeDiaSemana = `hoje é sexta`
        break

    case 6: 
        nomeDiaSemana = `hoje é sabado`
        break

    default: 
    console.log('dia inválido')
}



console.log(nomeDiaSemana)
console.log(`Data: ${diaMes} / ${mes} / ${ano}`)
console.log(`Horário: ${hora} : ${minutos} : ${segundos}`)
