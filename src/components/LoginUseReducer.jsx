import React, { useReducer } from 'react';


// Actions - aciones 
const FIELD = 'FIELD';
const LOGIN = 'LOGIN';
const SUCCESS = ' SUCCESS';
const ERROR = 'ERROR';
const LOGOUT = 'LOGOUT';

// INITIAL STATE - iniciar estado 
const initialState = {
    username: '',
    password: '',
    error: '',
    isLoading: false,
    isLoggedIn: false
}


// Reducer
const loginReducer = (state, action) => {
    switch (action.type) {
        case FIELD:  // devuelve todo lo que habia 
            return {
                ...state,
                [action.fieldName]: action.payload
            }
        case LOGIN:
            return {
                ...state,
                error: '',
                isLoading: true
            }
        case SUCCESS: // en caso de exito
            return {
                ...state,
                error: '',
                isLoading: false,
                isLoggedIn: true
            }
        case ERROR:
            return {
                ...state,
                error: 'Usuario o contraseña invalido:',
                isLoading: false,
                isLoggedIn: false,
                username:'',
                password:''
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            }
        default:
            break;
    }
}

const Loginusereducer = () => {

    const [state, dispatch] = useReducer(loginReducer, initialState);

    // Obtain all variables from state - obtener todos los valores como variable
    const { username, password, error, isLoading, isLoggedIn } = state;

    // Submit
    const submit = async (e) => {
        e.preventDefault();
        // Dispatch Action: - despacha una accioon 
        dispatch({type:LOGIN});
        try {
            await function login({username, password}) {
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if(username === 'admin' && password === 'admin') {
                            resolve();
                        }else {
                            reject()
                        }
                    }, 2000);
                })
            }
            dispatch({type: SUCCESS})
        } catch (error) {
            dispatch({type:ERROR})
        }
    }

    const logout = () => {  //para cerrar seccion
        dispatch({type: LOGOUT})
    }

    return (
        <div className='App'>
            <div>
                {
                    isLoggedIn ? (
                        <div>
                            <h1>
                                Bienvenido, {username}!
                            </h1>
                            <button onClick={logout}>
                                Cerrar seccion
                            </button>
                        </div>
                    ) :
                    (
                        <form onSubmit={submit}>
                            {
                                error && <p style={{color: 'tomato'}}>{error}</p>
                            }
                            <input 
                                type='text'
                                placeholder='Nombre de Usuario'
                                value = {username}
                                onChange = {(e) => 
                                    dispatch({  //despachamos el field
                                        type: FIELD, 
                                        fieldName:'username', 
                                        payload: e.currentTarget.value
                                        })
                                }
                            />
                            <input 
                                type='text'
                                placeholder='password'
                                value = {password}
                                onChange = {(e) => 
                                    dispatch({
                                        type: FIELD, 
                                        fieldName:'password', 
                                        payload: e.currentTarget.value
                                        })
                                }
                            />
                            <button type='submit'>
                                {isLoading ? 'Logging...' : 'Login'}
                            </button>

                        </form>
                    )
                }
            </div>
        </div>
    );
}

export default Loginusereducer;