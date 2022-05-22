function filterNum(arr) {
   return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const myArray = [1, 2 ,3 ,4 ,5 ,6 ,7];

console.log(filterNum(myArray));