// console.log("this is tutorial for java script");

// // TYPES OF LOOPS IN JAVASCRIPT I.E FOR,WHILE,DO-WHILE

// // // 1.FOR LOOPS :

// for (let i = 0;  i<101; i++){
//     console.log("i")
// }

// // //here let i = 0 is initialization and i<101 is condition and i++ is increment and decrement after printing console.log or any value in the { brackets} if condition given is true ;

// // // a+=1 and a++ both two are same increment also applied for - value

// // // 2.while loope : in this we can declare variable first means before while loop then we have to give condition and increment or decrement operator to avoid continue loop;

// let j = 0;
// while (j < 10) {
//   console.log(`printing 0 to  ${j}`);
//   console.log(j);
//   j++;
// }
// // // 3.Do while loop:first its runs given statement in do then its checks conditions . first do then check condition
// let k = 0;

// do{
//     console.log(k + 1);
//     k ++;
// } while (k<10);

// // //using break and if condition in dowhile loop

// let g = 0;
// do {
//   console.log(g + 1);
//   if (g === 5) {
//     break;
//   }
//   g++;
// } while (g < 10);

// console.log("printing stop");

// let l = 0;
// do {
//   if (l === 5) {
//     continue;
//   }
//   console.log(l + 1);
//   l++;
// } while (l < 10);

// console.log("printing stop");

// let arr = [2, 5, 6, 4, 2, 4];
// arr.forEach(function (element) {
//   console.log(element);
// });
// console.log("done");


// // //lets do for loop using obj:

// let oh = {
//     name: 'hell',
//     age: 34,
//     type: 'dangerous man',
//     os: 'kali linux',
// }

// for(let key in oh)
// {
//     console.log(`the ${key} of object is ${oh[key]}`)
// }
// console.log('done');



// // // useing forEach

// let arr1 = [2,4,5,6,4,26,7,5]

// // let arr = number
// arr1.forEach(function(element, index, array) {
//     console.log(element, index, array)
// })
