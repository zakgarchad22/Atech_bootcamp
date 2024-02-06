const express = require('express')
const router = express.Router()
const axios = require('axios')
const apiKey = 'yY4SFJnM2zJx8WEmxPrncH5wKaQxS3DgVuPP9fak'


router.get('/quote', function (req, res) {
  const url = `https://quotes.rest/qod.json?category=inspire&apikey=${apiKey}`
  axios.get(url)
    .then(response => {
      console.log("API Response:", response.data)
      res.status(200).send(response.data)
    })
    .catch(error => {
      console.error("API Error:", error)
      res.status(500).send({ error: error.message })
    })
})



module.exports = router;
