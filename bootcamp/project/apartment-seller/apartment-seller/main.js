
// let address = "P. Sherman 42 Wallabe Way, Sydney"
// let minPrice = 2000
// let maxPrice = 3000
// let minRooms = 2
// let maxRooms = 2
// let immediate = false
// let parking = true

$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y").is(":checked")
    let parking = $("#park-y").is(":checked")
    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate ,parking)
    
    renderApts(relevantApts)
})



const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments)
    // Your code goes here.
    const source = $("#apartment-template").html()
    const template = Handlebars.compile(source)
    const newHTML = template( {apartment : apartments} )
    $("#results").html(newHTML)
}

renderApts(apartments) //renders apartments when page loads
