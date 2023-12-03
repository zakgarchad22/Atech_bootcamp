//Write a function that counts the number of properties in an object.

function countProperties(obj) {
    count = 0
    for (k in obj){
        count++
    }
    return count
}
// Test the function with
console.log(countProperties({ name: 'Alice', age: 25 })); // Should return 2

function hasNestedProperty(obj, key) {
    const keys = key.split('.');
    return Object(obj).hasOwnProperty(keys[0]) ? true : false
}
// Test the function with
console.log(hasNestedProperty({ user: { name: 'Bob', age: 30 } }, 'user.name')); // Should return true


let person = {
    name: 'John',
    birthYear: 1990
};

function calculateAge(obj) {
    // Your code here
    return 2023-person.birthYear
}
// Test the function with
console.log(calculateAge(person)); // Should return age

function updateProperty(obj, key, value) {
    // Your code here
    return obj[key] = value
}
// Test the function with
console.log(updateProperty({ name: 'Alice' }, 'name', 'Bob')); // Should change name to Bob

function createNestedObject(obj) {
    const result = {
      user: {
        name: '',
        age: 0
      }
    }
    result.user.name = obj['user.name']
    result.user.age = parseInt(obj['user.age'])
    
    return result
  }
// Test the function with
console.log(createNestedObject({ 'user.name': 'Alice', 'user.age': 25 })); // Should return { user: { name: 'Alice', age: 25 } 


function displayObjectInHTML(obj) {

    let html = ""
    
    for (let key in obj) {
      html += `<p>${key}: ${obj[key]}</p>`
    }   
    return html
  }
const out = document.getElementById("object")
out.innerHTML = displayObjectInHTML({ name: 'Alice', age: 25 })

function hasProperty(obj, key) {
    return obj[key] ? true : false
}
// Test the function with
console.log(hasProperty({ name: 'Alice', age: 25 }, 'age')); // Should return true


//Add a method greet to an object person that returns "Hello, [name]!".
let person2 = {
    name: 'John',
    greet: function() {
        return `Hello , ${person2.name}! `
    }
};
// Test the method with
console.log(person2.greet()); // Should return "Hello, John!"

function objectToArray(obj) {
    // Your code here
    return Object.entries(obj)
}
// Test the function with
console.log(objectToArray({ name: 'Alice', age: 25 })); // Should return [['name', 'Alice'], ['age', 25]]

//Write a function that merges two objects into one.
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2)
}
// Test the function with
console.log(mergeObjects({ name: 'Alice' }, { age: 25 })); // Should return { name: 'Alice', age: 25}




