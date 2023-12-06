
//Exercise 1 and 2
let recipe = {
    "name": "Mashed Potatoes",
    "serves": 4,
    "calories": 250,
    "healthy": true,
    "ingredients": [
        {
            "name": "water"
        },
        {
            "name": "potatoes",
            "count": 2
        },
        {
            "name": "butter",
            "count": 2,
            "unit": "tablespoons"
        },
        {
            "name": "salt",
            "count": 0.5,
            "unit": "teaspoon"
        },
        {
            "name": "pepper",
            "count": 0.25,
            "unit": "teaspoons"
        },
        {
            "name": "garlic powder",
            "count": 2,
            "unit": "teaspoons"
        }
    ],
    "directions": [
        "Cut potatoes into half inch thick slices",
        "Add potatoes to a pot and cover with an inch of water.",
        "Bring the water to a boil over high heat, then reduce to a simmer and cover.",
        "Simmer for 20 minutes or until potatoes are fork tender.",
        "Drain water from potatoes, leaving the potatoes in the original pot.",
        "Add remaining ingredients to the pot with the potatoes.",
        "Mash potatoes until they reach the desired consistency.",
        "Serve immediately, or cover and refrigerate."
    ]
}

console.log(recipe.ingredients.filter(i => i.name == "garlic powder")[0].count) //should print 2
console.log(recipe.healthy) //should print true
console.log(recipe.calories) //should print 250
console.log(recipe.directions[0]) //should print "Cut potatoes into half inch thick slices"

//Exercise 3 and 4
let animals = {
    "name" : Cow,
    "weight" :{
        "kg" : 1000,
        'ton' : 1
    },
    "place-live" : field,
    "endangered" : true ,
    "food" : [
     water ,
     wheat

    ],
    "preditors" :[
    wolfs,
    lions

    ],
    "delicious": 1,

    "name" : Elephant,
    "weight" :{
        "kg" : 4000,
        'ton' : 4
    },
    "place-live" : field,
    "endangered" : true ,
    "food" : [
     water ,
     weeds

    ],
    "preditors" :[
    lions,
    hyenas
    ],
    "delicious": 0,

    "name" : GrayWolf,
    "weight" :{
        "kg" : 100,
        'ton' : 0.1
    },
    "place-live" : field,
    "endangered" : true ,
    "food" : [
     water ,
     sheep

    ],
    "preditors" :[
    beers,
    WhightWolf

    ],
    "delicious": 0,
    "name" : Squirrel,
    "weight" :{
        "kg" : 10,
        'ton' : 0.01
    },
    "place-live" : trees,
    "endangered" : true ,
    "food" : [
     water ,
     nuts

    ],
    "preditors" :[
    snakes,
    monkeys

    ],
    "delicious": 0
}



