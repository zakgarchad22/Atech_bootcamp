
import React from 'react';
import '../App.css';
import { useState } from 'react';

const Exercise1 = () => {
    const [person, setPerson] = useState({ name: "", age: "" });

    const handleChange = (event, property) => {
        setPerson({ ...person, [property]: event.target.value });
    }
    const handleButtonClick = () => {
        alert(`Come in ${person.name} you're ${person.age}`)
    }
    return (
        <div>
            <input id="name-input" onChange={(e) => handleChange(e, 'name')} value={person.name} />
            <input id="age-input" onChange={(e) => handleChange(e, 'age')} value={person.age} />
            <button onClick={handleButtonClick}>Go to Bar</button>
        </div>
    );
}
export default Exercise1;
