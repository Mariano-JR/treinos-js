/*Assincrono: Algo que não ocorre ou não se efetiva ao mesmo tempo
 -JavaScript roda de maneira sincrona*/

 //Promises: Objeto de processamento assincrono que inicialmente seu valor é desconhecido. Ela pode então ser resolvida ou rejeitada
 //Promises tem 3 estados: Pending, Fulfilled e Rejected
 const myPromises = new Promise((resolve, reject) => {
     window.setTimeout(() => {
         resolve(console.log('Resolvida!'));
     }, 2000);
 });

 await myPromises
        .then((result) => result + ' passando pelo then')  //.then é feito apos a promises ser bem sucedida
        .then((result) => result + ' e agora acabou!')      //Pega o resultado acumulado do .then anterior (Resolvida passando pelo then)
        .catch((err) => console.log(err.message));

        //Após 2 segundos, retornará o valor
        //"Resolvida passando pelo then e agora acabou!"

//Async e await - funções assincronas precisam dessas duas palavras chaves
// await - para o codigo até que a promises seja resolvida
// async - ultilizada pra criar uma função assincrona
async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });

    const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message));

    return resolved
}

//O resultado de uma promise sempre sera outra promise
//sempre chamar a promise com o await

//pode ser ultilizada com Try...Catch
async function resolvePromise2() {
    const myPromise2 = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });

    let result;

    try {
        result = await myPromise2
            .then((result) => result + ' passando pelo then')
            .then((result) => result + ' e agora acabou!')
    } catch(err) {
        result = err.message
    }

    return result;
}