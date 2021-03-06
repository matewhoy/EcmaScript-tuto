// object entries
const data= {
    frontend: "Mateo",
    backend: "Sergio",
    design: "Esteban",
}
//se transforma en matriz
const entries = Object.entries(data);
console.log(entries);

//cuantos elementos contiene
console.log(entries.length);

//devuelve los valores de un objeto a un arreglo
const values = Object.values(data)
console.log(values);
console.log(values.length);

//padding
const string = 'hello';
console.log(string.padStart(7,"hi"))
console.log(string.padEnd(12, ' -----'));
console.log('food'.padEnd(12, '  -----'));

//trailing comas
const obj = {
    front: "Mateo",
    back: "Sergio"
}


//async Await
const helloWorld = () => {
    return new Promise((resolve, reject) =>{
            (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
        })
    }


const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();