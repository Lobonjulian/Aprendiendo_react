import React, { useState } from 'react';
import Child from '../puros/child ';

const Father = () => {

    const [name, setName] = useState('Julian');

    function showMessage (text){
        alert(`Message received: ${text} `)
    }

    function updateName (newName){
        setName(newName)
    }

    return (
        <div style={{background: '#7F4D3E', padding: '10px'}}>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
