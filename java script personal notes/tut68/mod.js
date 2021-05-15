console.log('this is module.js');

average = (arr) => {
    let sum = 0;
    arr.forEach(element =>{
        sum += element;
    })
    return sum/arr.length;
}


module.exports = {
    avg: average,
    name:'hello',
    repo:'git'
};