
const names = ["Ashley", "Donovan", "Lucas" , "zakri"]
const ages = [23, 47, 18 , 19 , 20 ]
const people = []



for(let i = 0; i < Math.max(names.length,ages.length); i++){

  people.push({name : names[i] , age : ages[i]})
  
}
console.log(people)


