function retornaPar (arr) {
    return arr.filter(function callBack(num){
        if (num % 2 === 0 ){
            return num;
        }
    })
}

const numeros = [1, 2, 3, 4, 5, 6];

console.log('os numeros pares são', retornaPar(numeros));