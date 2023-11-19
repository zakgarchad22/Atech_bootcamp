const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }

  console.log("hi")
  for (let i in dictionary){
    console.log("Words that begin with  %s:",i);
    for (let key in dictionary[i]){

        console.log( dictionary[i][key]);
    }
}

  