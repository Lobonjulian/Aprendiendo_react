import React, {useState} from 'react';


let red = 0;
let green = 200;
let blue = 150;

// ? Estilo para usuario logueado
const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
};

// ? Estilo para usuario no logueado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

// Login / Logout buttons
const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={loginAction}>Iniciar sesión</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Cerrar sesión</button>
    )
}


// ? (Expresión true) && expresión => se renderiza la expresión
// ? (Expresión false) && expresión => no se renderiza la expresión




const Optionalrender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);

    // const updateAccess = () => {
    //     setAccess(!access);
    // }

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }


    let optionalButton;

    // if(access){
    //     optionalButton = <button onClick={updateAccess}>Logout</button>
    // }else{
    //     optionalButton = <button onClick={updateAccess}>Login</button>
    // }

    if(access){
        optionalButton = <LogoutButton propStyle={ unloggedStyle } logoutAction={logoutAction} ></LogoutButton>
    }else{
        optionalButton = <LoginButton propStyle={ loggedStyle  } loginAction={loginAction}></LoginButton>
    }

    //** */Mensajes no leídos
    let addMessages = () => {
        setNMessages(nMessages + 1)
    }

    return (
        <div>
            {/* Botón opcional */}
            { optionalButton }
            {/* N Mensajes no leídos */}
            {/* { nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new message...</p> }
            { nMessages > 1 && <p>You have {nMessages} new messages...</p> }
            { nMessages === 0 && <p>There are no new messages</p>} */}
            {/* Ternay Operator */}
            {access ? (
                <div>
                    { nMessages > 0 ? 
                    <p>Tienes {nMessages} nuevo mensaje{nMessages > 1 ? 's': null}...</p> : 
                    <p>No hay mensajes nuevos</p>
                    }
                    <button onClick={addMessages}>{nMessages === 0 ? 'Agrega tu primer mensaje': 'Agregar nuevo mensaje'}</button>
                </div>) : null}
        </div>
    );
}

export default Optionalrender;
