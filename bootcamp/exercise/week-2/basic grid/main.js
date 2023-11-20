const coffeeShop = {
    beans: 40,
    money : 100,
  
    drinkRequirements: {
      latte: {beanRequirement: 10, price: 1.5},
      americano: {beanRequirement: 5, price: 2.5},
      doubleShot: {beanRequirement: 15, price: 3.5},
      frenchPress: {beanRequirement: 12, price: 4.5}
      
    },

  
    makeDrink: function (drinkType) {
        if(!this.drinkRequirements[drinkType])
        {
            console.log(`Sorry, we don't make ${drinkType}`)
            return;
        }
        if (this.beans <= this.drinkRequirements[drinkType])
        {
            console.log("Sorry, we're all out of beans")
            return;
        }
        else
        {
            this.beans -= this.drinkRequirements[drinkType];
            return;
        }
        
    },

    buyBeans: function (numBens)
    {
        const PER_BEN = 1.5
        let total = (this.numBens*PER_BEN)
        this.money -= total



    },

    buyDrink : function(buyDrink)
    {
        this.money -= this.drinkRequirements[buyDrink].price
        console.log(this.money)
    }
  }
  
  coffeeShop.buyDrink("latte");
  coffeeShop.makeDrink("latte"); 
  coffeeShop.buyDrink("latte");

  