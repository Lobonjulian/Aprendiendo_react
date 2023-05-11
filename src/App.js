import logo from './logo.svg';
import './App.css';
import Saludos from './componentes/puros/saludos';
import Saludosfuncion from './componentes/puros/saludosfuncion';
import TaksListComponente from './componentes/container/taks_list';
import Ejemplo from './hooks/ejemplo';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*componentes-propios*/}
        {/*  <Saludos name={"Julian"}></Saludos> */}
        {/* <Saludosfuncion name={"jllian"}></Saludosfuncion> */}
        {/*  <TaksListComponente></TaksListComponente> */}
        {/*ejemplo de uso de Hooks */}
        {/*  <Ejemplo></Ejemplo> */}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
        <Ejemplo4 nombre="Julian">
          {/* Todo loq ue hay aquí, es tratado como props.children o hijo */}
          <h3>
            Contenido del props.children u Hijos
          </h3>
        </Ejemplo4>


      </header>
    </div>
  );
}

export default App;
