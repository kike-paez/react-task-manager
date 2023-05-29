import './App.css';
import FreecodecampLogo from './components/FreecodecampLogo';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <FreecodecampLogo />
      <div className='main-task-list'>
        <h1>My Tasks</h1>
        <Task text='Learn React'></Task>
      </div>
    </div>
  );
}

export default App;
