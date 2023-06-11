import React, {useState} from 'react';

// Definiendo estilos enconstantes:

// ? Estilo para usuario logueado
const loggedStyle = {
    color: 'yellow'
};

// ? Estilo para usuario no logueado
const unloggedStyle = {
    color: 'Blue',
    fontWeight: 'bold'
}

const Greetingstyled = (props) => {

    // Generamos un estado para el componente
    // y así controlar si el usuario está o no logueado
    const [logged, setLogged] = useState(false)

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged ? 
                (<p>Hola, {props.name}</p>) 
                : 
                (<p>Por favor has un  login</p>)
            }
            <button onClick={() => {
                console.log('Botón pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default Greetingstyled;