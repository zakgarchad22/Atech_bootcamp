let users = []

const getData = function () {
    users = [{ name: "Rick" }, { name: "Morty" }]
    console.log("Got users")
}

const displayData = function () {
    console.log("Going to display users")
    for (user of users) {
        console.log(user.name)
    }
}

getData()
displayData()
