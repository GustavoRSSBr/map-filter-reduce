
const manga = {
    value: 2,
}

const banana = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];


//console.log('this -> banana', mapComThis(nums, banana));
//console.log('this -> manga', mapComThis(nums, manga));

function mapSemThis (arr){
    return arr.map(function(item){
        return item * 3;
    })
}

console.log ('resultado ->', mapSemThis(nums));