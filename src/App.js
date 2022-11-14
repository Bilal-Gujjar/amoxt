import './App.css';
import Ahead from './components/Ahead';
import Api from './components/Api'
import DataSend from './components/DataSend';
import Scrolling from './components/Scrolling';
import Todo from './components/Todo';
import Ticker from './components/Ticker';
import TimeOut from './components/TimeOut';
import FieldSelector from './components/FieldSelector';

function App() {
  return (
    <div className="App">
      <h1>Data From API</h1>
      <Api/>
      <hr/>
      <Ahead/>
      <hr/>
      <Todo/>
      <hr/>
      <Ticker/>
      <hr/>
      <DataSend/>
      <hr/>
      <TimeOut/>
      <hr/>
      <FieldSelector/>
      <hr/>
      <Scrolling/>
      <hr/>
    </div>
  );
}

export default App;
