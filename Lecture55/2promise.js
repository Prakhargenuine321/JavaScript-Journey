//Here we will learn about 
//"promises.all()"-->

//1)It is an static method.

//2)I/P -->takes iterables.

//3)return -->single promise.

//**4)Returned promise fulfills when all of the input's promises fulfill, including when an empty iterable is passed.

//5)Rejects when any of the input's promises rejects.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});