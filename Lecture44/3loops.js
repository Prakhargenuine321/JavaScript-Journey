// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"; //further you can put multiple conditions i.e if "space" detected than break or continue the loop.
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}



// Maps-->Have key-value pairs and they have unique.
// Remembers the original insertion order of the keys.
// Keys in map are unique(it can occur once).

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);


//in following code if we take 'key' there it will print in form of array so to get it seperate take 'key' & 'value' inside [] so that it will destructure the array.
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


//objects are not iterable using 'for-of' loop there are another methods for it.
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }