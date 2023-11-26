$("#box1").hover(
  function() {    
      $("#box2").addClass("box-hover")
  },
  function() {
      $("#box2").removeClass("box-hover")
  }
);

$("#box2").hover(
  function() {    
      $("#box1").addClass("box-hover") 
  },
  function() {
      $("#box1").removeClass("box-hover")
  }
);
