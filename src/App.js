import logo from './logo.svg';
import './App.css';
import Greeting from './components/puros/Greeting';
import Greetingf from './components/puros/Greetingf';
import TaskListComponent from './components/container/taks_list';
import Ejemplo1 from './hooks/ejemplo';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';
import Greetingstyled from './components/puros/greetingstyled';
import Father from './components/container/father';
import Optionalrender from './components/puros/optionalRender';
import Loginformik from './components/puros/formularios/loginFormik';
import RegisterForm from './components/puros/formularios/registerFormik';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name='Julian'></Greeting> */}
        {/* Componente de ejemplo funcional */}
        {/* <Greetingf name={'Julian'}></Greetingf> */}

        {/* Ejemplos de uso de HOOKS */}
       {/* <Ejemplo1></Ejemplo1> */}
       {/* <Ejemplo2></Ejemplo2> */}
       {/* <MiComponenteConContexto></MiComponenteConContexto> */}

       {/* Todo loq ue hay aquí, es tratado como props.children */}
        {/* <Ejemplo4 nombre='Julian'>
        <h3>
            Contenido del props.children o hijos
          </h3>
       </Ejemplo4> */}
      {/* <Greetingstyled name="Julian"></Greetingstyled> */}

      {/* Gestión de eventos */}
      {/* <Father></Father> */}

      {/* Ejemplos de Renderizado condicional */}
      {/* <Optionalrender></Optionalrender> */}

      {/* Ejemplos de uso de Formik y Yup */}
      {/* <Loginformik></Loginformik> */}
      {/* <RegisterForm></RegisterForm> */}
      

        {/* Componente de Listado de Tareas */}
         {/* PROYECTO FINAL */}
        <TaskListComponent></TaskListComponent>

      {/* </header> */}
    </div>
  );
}

export default App;
