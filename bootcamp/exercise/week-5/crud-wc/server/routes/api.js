const express = require('express')
const router = express.Router()

const wordCounter = {}
//ex1
router.get('/sanity', (req, res) => {
  res.send('Server is up and running')
})

//ex2
router.get('/word/:word', (req, res) => {
  const word = req.params.word.toLowerCase().replace(/\W/g, '')
  if(word in wordCounter) 
  {
    res.send({ count: wordCounter[word] })
  } 
  else
  {
    res.send({ count: 0 })
  }
})
//ex3
router.post('/word', (req, res) => {
  const word = req.body.word.toLowerCase().replace(/\W/g, '')
  if(word in wordCounter)
  {
    wordCounter[word]++
  } 
  else 
  {
    wordCounter[word] = 1
  }
  res.send({ text: `Added ${word}`, currentCount: wordCounter[word] })
})

//ex4
router.post('/sentence', (req, res) => {
    const sentence = req.body.sentence
    const words = sentence.split(' ')
    let newWords = 0
    let oldWords = 0
  
    words.forEach((word) => {
      if (wordCounter[word]) {
        oldWords++
      } 

      else{
        newWords++
        wordCounter[word] = 1
      }
    })
  
    res.json({ text:`Added ${newWords} words, ${oldWords} already existed`, currentCount: -1 })
  })

//ex5
router.delete('/delete/:word', function (req, res) 
{
    let word = req.params.word.toLowerCase().replace(/\W/g, '') 
    try 
    {
      if (word in wordCounter) 
      {
        delete wordCounter[word]
        res.send({ text:`Deleted ${word}` })
      } 
      else 
      {
        throw new Error(`wordCounter not founded this ${word}`)
      }
    } 
    catch (error) 
    {
      res.status(404).send({ text: error.message })
    }
  })
module.exports = router