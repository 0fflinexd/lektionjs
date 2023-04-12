console.log("Hello man");

//variabler

let greeting = "Hej från en variabel";
console.log(greeting);
greeting = 3 ;
console.log(greeting);
greeting = "Hello";
const PI ="3.1415";

console.log(greeting +  'PI is ' + PI);

console.log(`${greeting}, PI is: ${PI}`);

//be careful with floats
console.log(0.1+0.2);

//equality

console.log(1==1); //true
console.log(1=='1'); //true wil lconvert to same type
console.log(1==='1'); //false

myNumber= 5;
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber + 5);

myNummber= "5";
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber + 5); // '55'



let myAge = 24;
console.log(myAge);
console.log("You\'re age is "+ myAge);

if (myAge >=40)
{
    console.log('You\'re getting oooold'); 
}
else 
{
    console.log('You\'re still young');
}

myAge===24 ?
        console.log('this is my age'):
        console.log('this is not my age');

//boolean statment ? true : false


for(let i = 0; i < 5 ; i++)
{
    console.log(i);
}



let persons = 
[
    'Mike', 
    'Emma',
    'Ally',
    'Lizzi',
];


console.log(persons);

console.log(persons.length);

console.log(persons[0]);
console.log(persons[persons.length - 1]);

let newPersons = persons.slice(0,2);

console.log(newPersons);

persons.unshift('Acke');
persons.push('Lotta');

console.log(persons);

//remove from start of array

persons.shift();

persons.pop();

console.log(persons);

//Loop arrays

for(let person of persons)
{
    console.log(person);
}

//older but still works

for(let i = 0; i< persons.length;i ++ )
{
    console.log(persons[i]);
} 

//objects
let mike = 
{
    firstName: 'Mike',
    lastName: 'Bäck',
    age: 38,
    hobby: 'music'

};

console.log(mike);

console.log(`First name: ${mike.firstName}`);

let mikeSr = `${mike.firstName} ${mike.lastName}, age: ${mike.age}`;

console.log(mikeSr);

let mikeAdvanced = 
{
    firstName: 'Mike',
    lastName : 'Bäck',
    age: 38, 
    hobbies: ['music', 'programming', 'reading', 'games']

};

console.log(mikeAdvanced);  //objekt
let mikeJSON = JSON.stringify(mikeAdvanced); //objekt till JSON
console.log(mikeJSON);    
console.log(JSON.parse(mikeJSON)); // tillbaka till objekt

//Loop over object

for (let propertyName in mikeAdvanced) 
{
    let propertyValue = mikeAdvanced[propertyName];
    console.log(propertyName, propertyValue);

}

for(let propertyName in mikeAdvanced)
{
    let propertyValue = mikeAdvanced[propertyName];
    if ( Array.isArray(propertyValue) === true)
    {
        for(let hobby of propertyValue)
        {
            console.log('Hobby: '+ hobby);
        }
        
    }
    else 
        {
            console.log(propertyName + " : " + propertyValue);
        }
}

let myDiv = document.createElement('div');
myDiv.innerHTML = `
<h1> Hello from JavaScript</h1>
<p> This text is from Javascript, my age is ${mike.age}</p>`
;

let body = document.querySelector('body');

body.append(myDiv);

let myBands = [{ 
    name: 'The Beatles',
    genre: 'Pop'
},
{
    name: 'The Rolling Stones',
    genre: 'Rock'
}
];

//grabs the bands div

let bandsDiv = document.querySelector('#bands');

for(let band of myBands)
{
    bandsDiv.innerHTML +=`
    <div class="band">
        <h2>${band.name}</h2>
        <p> Genre: ${band.genre}</p>
        </div>`
}

//funktioner

function sayHello(){
    console.log('Hello');
}
const sayHello2 = () => {
    console.log('Hello 2');
}

sayHello();
sayHello2();

function add(a,b){
    return a+b;
}
//arrow function
const add2 = (a,b) => {
    return a+b;
}
// function expression
const add3 = function (a, b) {
    return a+b;
}
//arrow function with implicit return
const add4 = (a, b) => a + b;

//arrow funtion with implicit return and one parameter

const add5 = a => a+ 5;

console.log(add(1, 2));
console.log(add2(1, 2));
console.log(add3(1, 2));
console.log(add4(1, 2));
console.log(add5(1));

class Person 
{
    constructor(name, age, hobby){
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }
    greetings()
    {
        console.log(`Hi, my name is ${this.name} and I am ${this.age}`);
        console.log('I enjoy: '+ this.hobby);
    }
}

const mikeClass = new Person ('Mike ', 38, 'Music');
mikeClass.greetings();


