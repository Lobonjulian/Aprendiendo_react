/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado
 * privado a través de un hook y, además, poder modificarlo
 */


import React, { useState } from 'react';

const Ejemplo = () => {

        /// Valor inicial para un contador
        const valorInicial = 0;

         // Valor inicial para una persona
        const personaInicial = {
            nombres : 'julian',
            email: 'julian@gmail.com'
        }

    /**
     * Queremos que el VALORINICIAL y PERSONAINICIAL sean 
     * parte del estado del componente para así poder gestionar su cambio
     * y que éste se vea reflejado en la vista del componente.
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

        
    const [contador , setContador ] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */

    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    /**
     * Función para actualizar el estado de persona en el componente
     */

    function actualizarPersona(){
        setPersona(
            {
                nombres: 'jillian',
                email: 'julian@gmail.com'
            }
        )
    }


    return (
        <div>
            <h1> ejemplo </h1>
            <h2> Contador: {contador} </h2>
            <h2> Datos de la persona </h2>
            <h3>Nombre: {persona.nombres}</h3>
            <h3>Correo: {persona.email}</h3>
                    {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementarContador}> Contador+</button>
            <button onClick={actualizarPersona}> Nombre+</button>
        </div>
    );
}

export default Ejemplo;
