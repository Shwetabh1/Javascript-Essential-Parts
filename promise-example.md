const request = require('request');
/*
 * You need to promisify your functions first,
 * which is basically wrapping them up in a Promise block. 
 * A promise is an object that will produce a single value in the future..either a resolved value or the reason it wasn't resolved.
 */

// your three functions...which promisisfied. Note the enclosing promise block.
function promiseExampleA() {
    return new Promise(function(resolve, reject) {
        // your function code
        // replace return with resolve 
        console.log('promise A')
        request('https://gorest.co.in/public-api/users', { json: true }, (err, res, body) => {
            if (err) {
                console.log('error')
                return console.log(err);
            }
            resolve('hello')
          });
        //resolve('promiseExampleA')
    });
}

function promiseExampleB() {
    return new Promise(function(resolve, reject) {
        // your functiom code
        // replace return with resolve 
        //resolve('promiseExampleB')
    });
}

function promiseExampleC() {
    return new Promise(function(resolve, reject) {
        // your functiom code
        // replace return with resolve 
        //resolve('promiseExampleC')
    });
}

// execute these three functions sequentially one after another.
// when function A executes THEN only function B will execute. 
// THEN function C executes.
promiseExampleA().then(function(){
    promiseExampleB().then(function(){
        promiseExampleC().then(function(){
        })
    })
})

/* 
 * You can also use async await. It looks cleaner.
 * Create an async function as driver function and place your A,B,C functions in the 
 * order in which you want them to execute.
 */

async function driverFunction() {
   await promiseExampleA()
   await promiseExampleB()
   await promiseExampleC()
}
driverFunction() // run the driver function

//-----------------JUST FOR INFORMATION------------------------------

/*
 * You can also use Promise.all() to execute three and get the values but they might not execute sequentially. 
 * There are hacks to make it sequential though.
 * Put your functions in an array as shown below.
 * Th returned values will also be returned in an array.
 * This is useful when you are making many different API calls and want all of their value together.
 */
Promise.all([promiseExampleA(), promiseExampleB(), promiseExampleC()]).then(function(values){
    console.log(values) 
    //output: values = [ 'promiseExampleA', 'promiseExampleB', 'promiseExampleC' ]
})

