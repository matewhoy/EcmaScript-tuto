// flat
let array = [1,2,3, [1,2,3], [1,2,3]];
console.log(array.flat(2))

//flatMap4
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

//trim
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); 

let hello = 'hello world                  ';
console.log(hello);
console.log(hello.trimEnd()); 


//error en catch
try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

//fromEntries

let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

//symbol object
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);