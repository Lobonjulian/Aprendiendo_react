import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton(){
        const text = messageRef.current.value;
        alert(`Texto en entrada: ${text}`);
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`);
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div style={{background: '#E2B659', padding: '30px'}}>
            <p onMouseOver={() => console.log('El ratón por encima')}>
                Hola,{name}
            </p>
            <button onClick={() => console.log('Botón 1 presionado')}>
                Boton 1
            </button>
            <button onClick={pressButton}>
                Boton 2
            </button>
            <button onClick={ () => pressButtonParams('Hola')}>
                Boton 3
            </button>
            <input 
                placeholder = 'Envía un mensaje de texto a tu padre'
                onFocus={() => console.log('Input Focuse o Entrada enfocada')}
                onChange={(e) => console.log('Entrada cambiada :', e.target.value)}
                onCopy={() => console.log('Texto copiado de Entrada') }
                ref = {messageRef}
                />
            <button onClick={() => send(messageRef.current.value)}>
                Enviar Mensaje
            </button>
            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='Nuevo Nombre' />
                    <button type='submit'>Actualizar nombre</button>
                </form>

            </div>
        </div>
    );
}

export default Child;
