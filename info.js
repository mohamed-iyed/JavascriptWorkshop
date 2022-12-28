// arrays in general

/*
// definition
enables saving multiple items (often with same type) in a single variable name.
examples:
    const clothes = ["T-shirt", "Socks", "Shoes"];
    const cars = [
        {
            model: "BMW",
            color: "gray"
        },
        {
            model: "Audi",
            color: "blue"
        },
        {
            model: "Mercedes",
            color: "white"
        }
    ];

caracteristiques:
    - JavaScript arrays are resizable and can contain a mix of different

    - JavaScript arrays are zero-indexed

    const arr = ["item1", "item2"];

    console.log(arr[1]) // item2

    the last possible index in array is : Math.pow(2, 32) - 2
    - what if we added a property after this index => adds it as a normal property because arrays are internally objects


    (The 2 in years[2] is coerced into a string by the JavaScript engine through an implicit toString conversion)
*/


// create items
// accessing items
// remove items
// update items

/*
    common things to do:
    - find an element in array : indexOf / find / findIndex (talk about finding objects + quiz)
    - talk about less used find methods
    - talk about mutable / unmutable methods
    - talk about splice (add + remove)
*/

// multidimensional array
// strings with arrays (split/join/toString + quiz with flatting the array)
// build the build-in methods by ourselves



// quiz spread operator:
/*
quiz:
function fn(arr) {
    const newArr = arr.slice(0, arr.length - 1);
    return newArr.join(', ') + 'and ' + arr[arr.length - 1];
}

const arr = ["Ali", "Mohamed", "Ahmed", "Dhia"];

easier way if order does not matter (suggest easier way with spread):

function fn(arr) {
    const [firstName, ...names] = arr;
    return names.join(', ') + 'and ' + firstName;
}

const arr = ["Ali", "Mohamed", "Ahmed", "Dhia"];
*/


// quiz high order function filter(return all numbers orange) + (startsWith method)
/*
    const numbers = [
        "22403123",
        "50143764",
        "54127689",
        "77414003",
        "95134098"
    ];

*/

/*
quiz :
find the longest word in a string

const str = "The quick brown fox jumped over the lazy dog";
*/

/*
quiz:
return the largest number in an array
const arr = [
    12,
    14,
    78,
    -14,
    55
]
*/

/*
quiz:
group by age:
const users = [
    {
        name: "Ahmed",
        age: 12
    },
    {
        name: "Ali",
        age: 20
    },
    {
        name: "Mohamed",
        age: 20
    },
    {
        name: "tarek",
        age: 12
    }
]
*/

//quiz
// what is the output
// const nums = [10, 50, 88];

// nums.filter(function(n) {
//     return n > 10;
// });

// console.log(nums);