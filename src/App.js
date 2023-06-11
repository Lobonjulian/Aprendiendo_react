import logo from './logo.svg';
import './App.css';
import Greeting from './components/puros/Greeting';
import Greetingf from './components/puros/Greetingf';
import TaskListComponent from './components/container/taks_list';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name='Julian'></Greeting> */}
        {/* Componente de ejemplo funcional */}
        {/* <Greetingf name={'Julian'}></Greetingf> */}

        {/* Componente de Listado de Tareas */}
        <TaskListComponent></TaskListComponent>

      </header>
    </div>
  );
}

export default App;
