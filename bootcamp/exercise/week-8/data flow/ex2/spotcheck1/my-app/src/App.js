import './App.css';
import List from './components/List';
import Conversation from './components/Conversation';
import { useState } from 'react';

function App() {
  const [displayConversation, setDisplayConversation] = useState(null)
  const [currentName, setCurrentName] = useState(null)
  const data  = {
    conversations: [
        {
            with: "Laura", convo: [
                { text: "Hi", sender: "self" },
                { text: "You there?", sender: "self" },
                { text: "Yeah, hi, what's up?", sender: "other" }
            ]
        },
        {
            with: "Dad", convo: [
                { text: "Have you finished your school work yet?", sender: "other" },
                { text: "Yes.", sender: "self" },
                { text: "What do you mean, yes?", sender: "other" },
                { text: "??", sender: "self" }
            ]
        },
        {
            with: "Shoobert", convo: [
                { text: "Shoobert!!!", sender: "self" },
                { text: "Dude!!!!!!!!", sender: "other" },
                { text: "Shooooooooo BERT!", sender: "self" },
                { text: "You're my best friend", sender: "other" },
                { text: "No, *you're* my best friend", sender: "self" },
            ]
        }
    ]
}

const displayConvo = (name) => {
  setCurrentName(name)
  setDisplayConversation(true)
}

const back = () => {
  setDisplayConversation(false)
}
  return(
    <div>
      {displayConversation ? 
      (
        <>
          <button onClick={back}>Back</button>
          <Conversation convo={data.conversations.find(convo => convo.with === currentName).convo} sender={currentName} />  
        </>
      ) 
      : 
      (
        <List  contacts={data.conversations.map(convo => convo.with)} displayConvo={displayConvo} />       
      )
      }
    </div>
  )
}

export default App;
