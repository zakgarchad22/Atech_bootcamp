$("button").on("click", function() {
  var name = $("#my-input").val()
  $("#feedme").append("<li id='feedme' class='feedme'>" + name + "</li>")
});

