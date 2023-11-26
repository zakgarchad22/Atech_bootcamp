$("button").on("click", function() {
  var name = $("#my-input").val()
  $("#feedme").append("<li class='human'>" + name + "</li>")
});

$("#feedme").on("click", ".human", function() {
  $(this).remove()
});