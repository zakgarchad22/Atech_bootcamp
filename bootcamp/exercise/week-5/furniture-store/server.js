const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'client')))

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/priceCheck/:name', function (request, response) {
    const product = store.find(({ name }) => name === request.params.name)
    if (product) {
        response.send({ price: product.price, 
            inventory : product.inventory
        })
        
    } else {
        response.send({ price: null })
    }
})
app.get('/buy/:name', function (request, response) {
    const productName = request.params.name
    const product = store.find(prod => prod.name === productName)

    if (product && product.inventory > 1) {
        product.inventory -= 1
        response.send({
            message: `Congratulations, you’ve just bought ${productName} for ${product.price}. There are ${product.inventory} left now in the store.`
        })
    }
    else if(product && product.inventory == 1)
    {
        product.inventory -= 1
               response.send({
            message: `you buy the last one`
        }) 
    }
    else
    {
       response.send({message : 'no left'}) 
    }

})

app.get('/sale', function (request, response) {
    if (request.query.admin === 'true') {
        store.forEach(item => {
            if (item.inventory > 10) {
                item.price = item.price * 0.5
            }
        })
    }
    response.send(store)
})
// app.get('/buy/:name', function (request, response) {
//     const product = store.find(prod => prod.name === request.params.name);

//     if (product) {
//         product.inventory -= 1;
//         response.json({
//             message: `Congratulations, you’ve just bought ${productName} for ${product.price}. There are ${product.inventory} left now in the store.`
//         })
//     }
// })


// app.get('/buy/:name', function (request, response) {
//     const productName = request.params.name
//     const product = store.find(prod => prod.name.toLowerCase() === productName);

//     if (product) {
//         product.inventory -= 1;
//         response.send(`remaining inventory: ${product.inventory}`)
//     }
// })

const port = 3001;
app.listen(port, function () {
    console.log(`Server is up and running on port ${port}`)
})
