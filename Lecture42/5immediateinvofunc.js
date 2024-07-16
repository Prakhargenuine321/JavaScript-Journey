// An Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined. The primary purpose of an IIFE is to create a new scope to avoid polluting the global scope.
//(function-defintion-here)(function-calling) that is why there are two paranthesis.
//In iife there should be always ; at end to avoid error.


(function chai(){ //This is "named-IIFE"
    console.log(`DB CONNECTED`);
})();

( (name) => { ////This is "simple-IIFE"
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');


//IIFE EXAMPLE-->
// (function() {
    // var count = 0;
    
    // function increment() {
    //     count++;
    //     console.log(count);
    // }
    
    // function decrement() {
    //     count--;
    //     console.log(count);
    // }
    
//     globalThis.increment = increment; //In browser in place of "globalThis" use 'windows'.
//     globalThis.decrement = decrement;
// })();

// increment(); // 1
// increment(); // 2
// decrement(); // 1
// console.log(count); // ReferenceError: count is not defined

//Explanation-->In this example, count, increment, and decrement are scoped within the IIFE, preventing count from being accessed or modified directly from the global scope. The increment and decrement functions are exposed to the global scope by attaching them to the 'globalThis' object.