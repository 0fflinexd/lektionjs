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

