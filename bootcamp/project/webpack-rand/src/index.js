import './styles.css'
import Renderer from './Renderer'
import APIManager from './APIManager'

const renderer = new Renderer()
const apiManager = new APIManager()

const loadData = () => {
    apiManager.loadData().then(data => {
        renderer.render(data)    
        if (!localStorage.getItem('userData')) {
            localStorage.setItem('userData', JSON.stringify(data))
        }
    })
}


$('#load-btn').on('click', loadData)




const renderData = () => {
    let savedData = JSON.parse(localStorage.getItem('userData'))
    if (savedData) 
    {
        console.log('Rendering saved data')
        renderer.render(savedData)
    } 
  
}



$('#display-btn').on('click', renderData)