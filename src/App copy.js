import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import LoginUseState from './components/LoginUseState';
import Loginusereducer from './components/LoginUseReducer';


function Appreducer() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      {/* <LoginUseState></LoginUseState> */}
      <Loginusereducer></Loginusereducer>

    </div>
  );
}

export default Appreducer;
