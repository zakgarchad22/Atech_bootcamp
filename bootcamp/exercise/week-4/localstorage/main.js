

let wisdoms = JSON.parse(localStorage.getItem('dataThatIsImportant')) || [];


$("button").on("click", function () {

    let newWisdom = $("input").val()
    
    if(newWisdom){
        wisdoms.push({ wisdom: newWisdom })
        renderWisdoms()
    }
    
})

const renderWisdoms = function () {
    // $("#results").empty()
    // wisdoms.forEach(w => {
    //     $("#results").append(`<p>${w}</p>`) 

    // }) 
    const source = $("#wisdom-template").html()
    const templete = Handlebars.compile(source)
    const newHTML = templete({wisdoms})
    $("#results").html(newHTML)


    localStorage.setItem('dataThatIsImportant', JSON.stringify(wisdoms));
    
}

$("#clear-wisdoms").on("click", function () 
{
    wisdoms = []
   
    localStorage.removeItem('dataThatIsImportant')
    renderWisdoms()
})

$("#results").on("click", ".delete-wisdom", function() 
{
    let index = $(this).data("id")
    wisdoms.splice(index, 1)
    renderWisdoms()
})



renderWisdoms()