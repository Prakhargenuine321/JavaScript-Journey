const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}


//'for-in' loop is used to iterate through 'objects'.
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}



//try karke daekho ab 'arrays' par(practical jaroori hai isliye uncomment and execute)
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

//~~ difference between 'for-in' and 'for-of' is that 'for-of' returns 'value' and 'for-in' returns 'key'.

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


//map is not iterable using 'for-in' further we will discuss or you can read docs on 'maps' from mdn.
// for (const key in map) {
//     console.log(key);
// }