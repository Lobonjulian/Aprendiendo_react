import React from 'react';
import PropTypes from 'prop-types';


const Saludosfuncion = (props) => {
        
        // Breve introducción a useState
        // const [variable, método para actualizarlo] = useState(valor inicial)

    const[age, setage] = (28);
    
    const cumpleaño = () => {
        // actualizamos el State
        setage(age +1);
    }

    return (
        <div>
            <div>
                <h1>
                    ¡hola rola  {props.name} desde saludo funcion!
                </h1>
                <h2>
                    tu edad es de: { age }
                </h2>
                <div>
                    <button onClick={cumpleaño}>
                        cumplir años 
                    </button>
                </div>*/
            </div>
        </div>
    );
};


Saludosfuncion.propTypes = {
    name: PropTypes.string
};


export default Saludosfuncion;
