
$.get('https://randomuser.me/api/?results=15', function(data) {

    console.log(data);
    const source = $("#meanUser-template").html()
    const template = Handlebars.compile(source)
    const users = data.results
    const newHTML = template({users})
    $(".grid-container").html(newHTML)
})
