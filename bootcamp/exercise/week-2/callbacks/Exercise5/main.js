


const capitalize = (str) => 
{
    const lowerStr = str.toLowerCase();
    const result = lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1);
      return result
}

  


capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia
