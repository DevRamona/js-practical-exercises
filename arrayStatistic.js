function arrayStats(arr1) {
    let arrayElements = {
       sum: arr1.reduce((accumulator, value) => {
        return accumulator + value;
       }, 0),
       
       average: arr1.reduce((accumulator, value) => {
        return accumulator + value;
       }, 0) / arr1.length,

       min: Math.min(...arr1),
       max: Math.max(...arr1),
    };
    return arrayElements;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
const statistics = arrayStats(numbers);
console.log(statistics);