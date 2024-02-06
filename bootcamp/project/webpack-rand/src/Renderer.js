class Renderer {
    renderUsers(users) {
        let source = $("#user-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(users)
        $(".user-container").empty().append(newHTML)
    }

    renderFriends(users) {
        if (Array.isArray(users.results)) {
            let sourceFriends = $("#user-friends-template").html()
            let templateFriends = Handlebars.compile(sourceFriends)
            let friendsHTML = templateFriends({ friends: users.results.slice(1) })
            $(".friends-container").empty().append(friendsHTML)
        } 
    }

    
    renderPokemon(pokemonInfo) {
        let sourcePokemon = $("#pokemon-template").html()
        let templatePokemon = Handlebars.compile(sourcePokemon)
        let pokemonHTML = templatePokemon(pokemonInfo)
        $(".pokemon-container").empty().append(pokemonHTML)
    }

    renderMeat(meatText) {
        let sourceMeat = $("#meat-template").html()
        let templateMeat = Handlebars.compile(sourceMeat)
        let meatHTML = templateMeat({text: meatText})
        $(".meat-container").empty().append(meatHTML)
    }

    render(data){
        this.renderFriends({results: data.friends})
        this.renderUsers(data.users)
        this.renderPokemon(data.pokemon)
        this.renderMeat(data.meat)
    }

}
export default Renderer