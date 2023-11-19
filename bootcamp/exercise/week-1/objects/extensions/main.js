const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true,
    fridge: {
        price: 500,
        works: false,
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const hasOven = kitchen.hasOven;
const works = kitchen.works;
const cost = kitchen.fridge.price/2;
const expire = date -kitchen.fridge.items[1].expiryDate;

if (hasOven && works) 
{
  console.log("Geraldine's raddish expired %s day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.",expire);
} 
else if (!hasOven && works) 
{
  console.log("Geraldine's raddish expired %s day ago. Weird, considering her fridge works. Too bad she doesn’t have an oven to cook the raddish in.",expire);
} 
else if (hasOven && !works) 
{
  console.log("Geraldine's raddish expired %s day ago. Probably because her fridge doesn’t work. Luckily, she has an oven to cook the raddish in. And she’ll have to pay %s to fix the fridge.",expire,cost);
} 
else 
{ 
  console.log("Geraldine's raddish expired %s day ago. Probably because her fridge doesn’t work. Too bad she doesn’t have an oven to cook the raddish in. And she’ll have to pay %s to fix the fridge.",expire,cost);
}
