import './App.css';
import FreecodecampLogo from './components/FreecodecampLogo';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <FreecodecampLogo />
      <div className='main-task-list'>
        <h1>My Tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
