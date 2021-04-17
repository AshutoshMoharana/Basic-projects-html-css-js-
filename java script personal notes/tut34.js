//FEW WAYS TO WRITE ASYNHRONOUS CODE IN JAVASCRIPT :

// .Async/await 
// .callbacks 
// .promises 

// simple example of async 

console.log('this is an async example: ')


setTimeout(() => {
    for (let index = 0; index < 100; index++) {
        const element = index;
        console.log('this is index nummber' + index)
        
    }
    // console.log('done printing')
    
}, 3600);

console.log('done printing')




 
