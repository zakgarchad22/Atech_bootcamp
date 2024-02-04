import React, { useState } from 'react';
import '../App.css';

function Exercise2() {
  const [name, setName] = useState('')
  const [fruit, setFruit] = useState('')

  const handleFruitChange = (event) => 
  {
    const selectedFruit = event.target.value
    setFruit(selectedFruit)

  }

  const showMessage = name !== '' && fruit !== ''

  return (
    <div className="Exercise2">
      <input
        type="text"
        id="name-input"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        list="fruits"
        id="select-input"
        value={fruit}
        onChange={handleFruitChange}
      />
      <datalist id="fruits">
        <option value="Apple" />
        <option value="Banana" />
        <option value="Cherry" />
        <option value="Date" />
        <option value="Elderberry" />
      </datalist>
      {showMessage && <p>{name} + {fruit}</p>}
    </div>
  )
}

export default Exercise2;
