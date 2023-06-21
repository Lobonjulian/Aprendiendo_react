import React, { useReducer, useContext } from 'react';

// Actions - diferentes Aciones 
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const myContext = React.createContext(null); 

const Points = () => {

    const state = useContext(myContext);

    return (
        <p>Puntos: { state.count }</p>
    )

}

const Counter = () => {

    // Initial State for Reducer - iniciamos el estado del reducer 
    const initialState = {
        count: 0
    }

    // Reducer to change State -- para cambiar de estado
    const reducer = (state, action) => {

        switch (action.type) {
            case INCREMENT:
                return {
                    count: state.count + action.payload.quantity
                }
            case DECREMENT:
                return {
                    count: state.count - action.payload.quantity
                }
            case RESET:
                return {
                    count: 0
                }
            default:
                return state;
        }

    }

    // Asign useReducer to state, reducer and dispatch actions --Asigne useReducer a acciones de estado, reductor y despacho
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <myContext.Provider value={state}>
            <div>
             {/* pasamos los datos de la constante  */}
                <Points />
                <button 
                    onClick = {
                        () => dispatch({ //despacha una accion
                            type: INCREMENT,
                            payload: {
                                quantity: 3
                                }
                            })
                    }
                >
                    Incrementamos *3
                </button>
                <button 
                    onClick = {
                        () => dispatch({
                            type: DECREMENT,
                            payload: {
                                quantity: 1
                                }
                            })
                    }
                >
                    Reducir
                </button>
                <button 
                    onClick = {
                        () => dispatch({type: RESET})
                    }
                >
                    Resetear Contenido
                </button>
                
            </div>
        </myContext.Provider>
    );
}

export default Counter;
