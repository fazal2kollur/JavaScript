//The Ternary Operator 
const x = 20; 
const answer = x > 10 ? "greater than 10" : "less than 10";
//console.log(answer);

//Short-circuit Evaluation Shorthand
let variable1="test";
const variable2 = variable1  || 'new';
//console.log(variable2);

// Declaring Variables Shorthand
let a, b, c=3;
//console.log(a);
//console.log(b);
//console.log(c);

//If Presence Shorthand
let likeJavaScript=null;
if (likeJavaScript)
//console.log(likeJavaScript);
//Instead of presence!=true
var presence;
if ( !presence ) {
    //console.log(presence);
}
//JavaScript For Loop Shorthand
const fruits = ['mango', 'peach', 'banana'];
for (let fruit of fruits){
  //  console.log(fruit)
}
for (let index in fruits){
   // console.log(index)
}
const obj = {continent: 'Africa', country: 'Kenya', city: 'Nairobi'}
for (let key in obj){
  //console.log(key) // output: continent, country, city
}

  //Short-circuit Evaluation
  const dbHost = process.env.DB_HOST || 'localhost';

  //Object Property Shorthand
  const p = 1920, q = 1080;
//const pq = { p:p, q:q };//long
const pq = { p,q};

//Arrow Functions Shorthand
sayHello = name => console.log('Hello', name);

setTimeout(() => console.log('Loaded'), 2000);

//list.forEach(item => console.log(item));

//Implicit Return Shorthand
const calcCircumference = diameter => Math.PI * diameter;
calcCircumference();

//Default Parameter Values
const volume = (l, w = 3, h = 4 ) => (l * w * h);
volume(2) //output: 24

// Template Literals
const first="First", last="Last", host="host", port="port", database="database" ;
const welcome = `You have logged in as ${first} ${last}`;
const db = `http://${host}:${port}/${database}`;
console.log(db)

//Destructuring Assignment Shorthand
//const observable = require('mobx/observable'); 
//const store = this.props.store;
//const form = this.props.form;
import { observable, action, runInAction } from 'mobx';

const { store, form, loading, errors, entity } = this.props;

//Multi-line String Shorthand
// Spread Operator Shorthand
// Mandatory Parameter Shorthand
// Array.find Shorthand
//  Object [key] Shorthand
//  Double Bitwise NOT Shorthand
// Converting a String into a Number
// Object Property Assignment
// Bitwise IndexOf Shorthand
// Object.entries()
// Object.values()