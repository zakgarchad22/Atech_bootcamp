const StringFormatter = function () {

  const capitalizeFirst = function (str) {
      const lStr = str.toLowerCase();    
      return lStr.charAt(0).toUpperCase() + lStr.slice(1);
  }

  const toSkewerCase = function (str) {
    let skewer = ''; 
    for (let s of str) {
      if (s === ' ') {
        skewer += "-"; 
      } else {
        skewer += s; 
      }
    }
    return skewer;
  }

  return {
      capital: capitalizeFirst,
      skewer: toSkewerCase
  }
}

const formatter = StringFormatter();

console.log(formatter.capital("dorothy")); //should return Dorothy
console.log(formatter.skewer("blue box")); //should return blue-box
