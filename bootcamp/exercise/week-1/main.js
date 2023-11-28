function countProperties(obj) {
    let cont = 0
    for(let c in obj){cont++}
    return cont
}
// Test the function with
console.log(countProperties({ name: 'Alice', age: 25 })); // Should return 2



