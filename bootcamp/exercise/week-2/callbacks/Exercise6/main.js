const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

  const commentOnWeather = (temp) =>{
    return console.log(determineWeather(temp))
  }

  commentOnWeather(30)