class APIManager {
    constructor() {
        this.data = JSON.parse(localStorage.getItem('userData')) || {}
        this.currentUser = null
    }

    loadData() {

        const usersRequest = $.get('https://randomuser.me/api/?results=7')
        const number = Math.floor(Math.random() * 156) + 1
        const pokemonRequest = $.get(`https://pokeapi.co/api/v2/pokemon/${number}/`)
        const meatRequest = $.get('https://baconipsum.com/api/?type=all-meat&paras=2')

        return Promise.all([usersRequest, pokemonRequest, meatRequest])
            .then(([usersResponse, pokemonResponse, meatResponse]) => {
                const usersData = usersResponse.results[0]
                const pokemonData = pokemonResponse
                const meatData = meatResponse[0]
                const friendsData = usersResponse.results     
                this.data.users = usersData   
                this.data.pokemon = pokemonData   
                this.data.meat = meatData
                this.data.friends = friendsData
                return this.data
            })
            .catch(() => {
                console.error("cannot load the data")
            })
    }
}

export default APIManager
