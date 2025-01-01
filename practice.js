function ifTrue(array){
    return array.every(x => x > 0) 
}

console.log(ifTrue([1,2,3,4,5]))

// const getRandomHex = () =>
//     '#' + Array.from({length: 6}).map(getHex).join('');

// console.log(getRandomHex());
