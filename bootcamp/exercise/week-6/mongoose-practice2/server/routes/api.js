const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}).then( function (people) {
        res.send(people)
    })
})

router.post('/person' , function(req,res) {

    const p1 = new Person({

        firstName : req.body.firstName,
        lastName : req.body.lastName,
        age : req.body.age

    })
    return res.status(200).json(p1)

})

router.put('/person/:id', async function(req, res) {
  
        const personId = req.params.id
        const updatedPerson = await Person.findByIdAndUpdate(personId, { age: 80 }, { new: true })
        res.send(updatedPerson)
    
})

router.delete('/apocalypse', function(req, res) {
    Person.deleteMany({}).res.send(`deleted allpeople`);

        
      })


    //Assume you have a Person Schema with a name property
            
const removePerson = (name) => {
    let p = Person.findOneAndDelete({
   name: name
   })
   return p
}

    






module.exports = router
