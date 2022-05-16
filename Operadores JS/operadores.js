function compararNumeros(num1, num2) {
    const first = makeFirst(num1, num2);
    const second = makeSecond(num1, num2);

    return `${first} ${second}`;
}

function makeFirst(num1, num2) {
    let first = `Os números ${num1} e ${num2}`;
    let yesNo = 'não';

    if (num1 === num2){
        yesNo = '';
    }

    return `${first} ${yesNo} são iguais,`;
}

function makeSecond(num1 , num2) {
    const plus = num1 + num2;
    let iq10 = 'menor';
    let iq20 = 'menor';

    if (plus > 10) {
        iq10 = 'maior';
    }

    if (plus > 20) {
        iq20 = 'maior';
    }

    return `Sua soma é ${plus}, que é ${iq10} do que 10 e ${iq20} do que 20.`;
}

console.log(compararNumeros(5, 10));