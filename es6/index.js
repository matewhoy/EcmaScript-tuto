//como se hacia antes
function newFunction(name, age, country){
    var name = name || 'Mateo';
    var age = age || '20';
    var country = country || 'CO';
    console.log(name, age, country);
}

// como se hace con es6
function newFunction2(name = 'oscar', age = '32', country = 'CO' ){
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23', 'CO')

//concatenaiones antes

let hello = "Hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)

//Concatenasiones es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)


//multilinea antes
let lorem = "LET y CONST, Multilínea, Spread Operator y Desestructuración\n"
+ "Otra frase epica que necesitamos.";

//multilinea ec6
let lorem2 = `otra frase epica que necesitamos
ahora es ora frase epica
`;
console.log(lorem);
console.log(lorem2);


// OBJETO PERSON
let person = {
    'name': 'Mateo',
    'age': '20',
    'country': 'CO'
}

console.log(person.name, person.age);

let{name, age} = person;

//desestructurar elemento
console.log(name, age);

//unir elementos
let team1 = ['Mateo', 'Sergio', 'Esteban', "Juan"];
let team2 = ['Valentina', 'Daniela', 'Alejandra'];

let education = ['David', ...team1, ...team2];

console.log(education);

//let elementos para guardar en memoria
//antes se usaban var para esto ahora es let
//let solo es disponible en el bloque definido mientras que var es global

{
    var globalVar = "Global Var";

}

{
    let globalLet = "Global Let"
    console.log(globalLet);
}

console.log(globalVar);

//constantes no cambian su valor con var si cambian 
const a = 'b';
a = 'a';


//objetos 
let name = 'Mateo';
let age = 20;

//antes para los objetos

obj = {name: name, age: age};

//ahora con es6

obj2= {name,age};
console.log(obj2);

//arrow function
const names = [
    {name: 'Mateo', age: 20},
    {name: 'Valentina', age: 21}
]

//antes
let listOfNames = names.map(function(item){
    console.log(item.name)
}
)

//ec6

let listOfNames2 = names.map(item => console.log(item.name));

// otra forma de escribir los arrows
const listOfNames3 = (name, age, country) => {
    ...
}

//otra forma
const listOfNames4 = name => {
    ...
}

//con un unico atributo
const square = num => num * num;


//promesas
const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if (true){
            resolve('Hey!');
        }else{
            reject('Ups!!');
        }
    });
}

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error))


//clases
class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//modulos import export
import{ hello } from './module';


// generadores
function* helloWorld(){
    if(true) {
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);