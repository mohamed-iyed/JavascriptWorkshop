// Creating objects

/*
 An object is a collection of related data and/or functionality.
 These usually consist of several variables and functions (which are called properties and methods when they are inside objects).

 object members can be any thing (any data type)
 properties: data stored inside the object (it can be anything number - boolean - string - array)
 methods: functions that allow the object to do something with that data (properties)
*/


const obj = {
    name: 'Maher',
    lastName: 'Fourati',
    age: 26,
    bio: function () {
        return `${this.name} ${this.lastname} is ${this.age} years old`
    },
    introduceSelf() {
        return `Hi I'am ${this.name} ${this.lastName}`
    }
    /*
        both syntax are valid and the shorter one is easier
    */
};


/*
    this object (obj) here is called object literal we've literally written out the object contents as we've come to create it diffrent from object instance
    object literal useCases: sending related data to server instead of sending them piece by piece
*/


// additional info (Creating objects)

// create an object using new Object() or Object()

/*
    If the value is null or undefined, it creates and returns an empty object.
    Otherwise, it returns an instance that corresponds to the given value.
    If the value is an object already, it returns the value.
*/


/*
    also you can create objects from existing ones by using spread operator or Object.assign()
*/

const obj = { someProp: 'someProp' };

const obj1 = { ...obj, anotherProp: 'anotherProp' }  // { someProp: 'someProp', anotherProp: 'anotherProp' }


// Property definitions

/*
In JavaScript, identifiers are commonly made of alphanumeric characters,
underscores (_), and dollar signs ($). Identifiers are not allowed to start with numbers. However,
JavaScript identifiers are not only limited to ASCII — many Unicode codepoints are allowed as well. Namely,
any character in the ID_Start(https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D)
category can start an identifier,
while any character in the ID_Continue(https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D)
category can appear after the first character.
*/

const variable = object.propertyName;
object.propertyName = value;


const object = {};
object.$1 = "foo";
console.log(object.$1); // 'foo'

const object = {};
object.1 = 'bar'; // SyntaxError
console.log(object.1); // SyntaxError

/*
also objects properties in javascript support naming properities as reserved words but
*/
const obj = {
    import: 'moduleName'
}

obj.import // moduleName



/*
Howerver not all places accept the full range of identifiers. Certain syntaxes,
=such as function declarations, function expressions, and variable declarations require using identifiers names that are not reserved words.
*/

function import() { } // Illegal: import is a reserved word.
// list of all reserved words in javascript : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words


/*
    In ECMAScript 5 strict mode code, duplicate property names were considered a SyntaxError.
    With the introduction of computed property names making duplication possible at runtime,
    ECMAScript 2015 has removed this restriction.
*/

const a = { x: 1, x: 2 };
console.log(a); // {x: 2}


// Method definitions

/*
    A property of an object can also refer to a function or a getter or setter method.
*/


const o = {
    property: function (parameters) { },
    get property() { },
    set property(value) { },
};



// Accessing properties

/*
accessing properties on values not stored in variables:

accessing properties on a number
accessing properties on a string

If you use a method for a numeric literal, and the numeric literal has no exponent and no decimal point, 
you should leave white-space(s) before the dot preceding the method call, so that the dot is not interpreted as a decimal point.
*/

77.toExponential();
// or
77
    .toExponential();
// or
(77).toExponential();
// or
77..toExponential();
// or
77.0.toExponential();
// because 77. === 77.0, no ambiguity


// dot notation

// Bracket notation

/*
In the object[expression] syntax, the expression should evaluate to a string or Symbol that represents the property's name. 
So, it can be any string literal, for example, including '1foo', '!bar!', or even ' ' (a space).
*/

const key = "name";
const getKey = () => "name";
const Obj = { name: "Michel" };

Obj["name"]; // returns "Michel"
Obj[key]; // evaluates to Obj["name"], and returns "Michel"
Obj[getKey()]; // evaluates to Obj["name"], and returns "Michel"

/*  
  For example, if an object property name is held in a variable
  then you can't use dot notation to access the value, but you can access the value using bracket notation
*/

const propertyName = 'name';
const propertyValue = 'mohamed';

object[propertyName] = propertyValue;

// you can put a space between the namespace and the brackets (valid), however always linters remove these unnessesary spaces
object[propertyName] = propertyValue;

/*
However, beware of using square brackets to access properties whose names are given by external input. This may make your code susceptible to object injection attacks.
(https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md)
*/

/*
objects are associative arrays : they map strings to values in the same way that arrays map numbers to values
same as access items in an array because arrays are object but with numerical keys
*/

/*
Dot notation is generally preferred over bracket notation because it is more succinct and easier to read.
However there are some cases where you have to use brackets.
*/

person.name;
person['name'];

// especially when accessing nested properties

person.bio.name;
person['bio']['name'];



person[propertyName] = propertyValue;

// Computed property names


/*
  adding properties dynamically to an object (keys and values)
*/

const names = ['name', 'lastname', 'age'];
const values = ['Mohamed', 'Rayen', 14];

const obj2 = {};

for (let i = 0; i < 3; i++) {
    const name = names[i];
    const value = values[i];

    obj2[name] = value;
}


// quiz
let i = 0;
const a = {
    [`foo${++i}`]: i,
    [`foo${++i}`]: i,
    [`foo${++i}`]: i,
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

// describe the object a

// quiz 

function logProperty(prop) {
    console.log(obj1.prop);
    console.log(obj1[prop]);
}

const obj1 = {
    name: 'Ahmed',
    age: 14,
}

const propertyName = 'propertyName';
const name = '';

logProperty(propertyName);
logProperty(name);

// what is the output of this code


// hard quiz
const items = ["A", "B", "C"];
const obj = {
    [items]: "Hello",
};
console.log(obj); // {"A,B,C": "Hello"}
console.log(obj["A,B,C"]); // "Hello"


/*
    what is "this" ?
    The this keyword refers to the current object the code is being written inside
*/

const person1 = {
    name: "Chris",
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}.`);
    },
};

const person2 = {
    name: "Deepti",
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}.`);
    },
};

/*
    Well, when you only have to create a single object literal, it's not so useful.
    But if you create more than one, this enables you to use the same method definition for every object you create.
*/


// delete props from object

/*
    accessing property that does not exist will always return undefined, now if we want to delete a property from an object
    just assign undefined to that property

    that does not work to delete a propty from an object you need to use the delete keywork (uniray operator)
    if that returns true then the property is delete else false
*/

const car = {
    model: 'BMW',
    color: 'red'
};

console.log(car.matricule); // undefined

// Constructors

/*
 Using object literals is fine when you only need to create one object,
 but if you have to create more than one, as in the previous section, they're seriously inadequate. 
 We have to write out the same code for every object we create,
 and if we want to change some properties of the object - like adding a height property - then we have to remember to update every object.

 We would like a way to define the "shape" of an object — the set of methods and the properties it can have — 
 and then create as many objects as we like, just updating the values for the properties that are different.
*/

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
}

// Now we can create as many objects as we like, reusing the definition:

const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();


/*
This works fine but is a bit long-winded: we have to create an empty object, initialize it,
and return it. A better way is to use a constructor.
A constructor is just a function called using the new keyword. When you call a constructor, it will:
create a new object
bind this to the new object, so you can refer to this in your constructor code
run the code in the constructor
return the new object.
*/


/*
 Constructors, by convention, start with a capital letter and are named for the type of object they create. So we could rewrite our example like this:
 */

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
}



const salva = new Person("Salva");
salva.name;
salva.introduceSelf();

const frankie = new Person("Frankie");
frankie.name;
frankie.introduceSelf();


/*
you have been using objects in your code always
*/

myString.split(',');

/*
You were using a method available on a String object. Every time you create a string in your code, 
that string is automatically created as an instance of String, and therefore has several common methods and properties available on it.
*/

// When you accessed the document object model using lines like this:

const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");


/*
For each webpage loaded, an instance of Document is created, called document, which represents the entire page's structure,
content, and other features such as its URL. Again, this means that it has several common methods and properties available on it.
*/


/*
Congratulations, you've reached the end of our first JS objects article — you should now have a good idea of how to work with objects in JavaScript
— including creating your own simple objects. You should also appreciate that objects are very useful as structures for storing related data and functionality
— if you tried to keep track of all the properties and methods in our person object as separate variables and functions, it would be inefficient and frustrating,
and we'd run the risk of clashing with other variables and functions that have the same names.
*/




// comparing objects


// stread operator / object.assign

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// { foo: "baz", x: 42, y: 13 }

// Warning: Note that Object.assign() triggers setters, whereas the spread syntax doesn't!

// quiz

// looping over objects

// quiz

// optional chaining

// quiz