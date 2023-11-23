
  getTime = function(returnTime){
    const time = new Date()
    returnTime(time)
    
  }
  
  const returnTime = function (time) {
    alert('The current time is: ' + time)
  }
  
  getTime(returnTime)
  