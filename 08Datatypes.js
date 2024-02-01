"use strict"; //1)-->Yaeh likhne sae JS code ko as newer version treat kiya jata hai but hum agar declare na bhi karein phir modern browser no how to treat.

// alert(3+3) //2)-->Yaeh error dega "not-defined" beacuse we are working on Node not in browser (Uncomment to justify!).

//3)-->Code redability ko priority daeni hai.

//4)-->Official documentation for js: https://tc39.es/ and you can also refer mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript .


//5)-->Following are few datatypes:
/* 
 a)number => 2 to power 53
 b)bigint => for storing large values
 c)string => " "
 d)boolean => true/false
 e)null => standalone value
 f)undefined => jab hum nae kuch bhi value na define ki ho 
 g)symbol => uniqueness define karne kae liye
*/

//6)-->What if check "typeof" 'null' and 'undefined'
console.log(typeof null); //O/P => object
console.log(typeof undefined); //O/P => undefined
