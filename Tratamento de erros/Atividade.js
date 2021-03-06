function debug(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie parametros validos");
    
        if (typeof arr !== 'object') throw new TypeError("Envie um Objeto valido");
   
        if (typeof num !== 'number') throw new TypeError("Envie um Número valido");

        if (arr.length !== num) throw new RangeError("Tamanho invalido");

        return arr;
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!")
            console.log(e.message)
        }else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!")
            console.log(e.message)
        }else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!")
            console.log(e.message)
        } else {
            console.log("Tipo de erro não esperado:" + e)
        }
    }
}

console.log(debug([1, 2, 3, 4, 5], 5));