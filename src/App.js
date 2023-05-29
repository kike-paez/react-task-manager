import './App.css';
import FreecodecampLogo from './components/FreecodecampLogo';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className="App">
      <FreecodecampLogo />
      <div className='main-task-list'>
        <h1>My Tasks</h1>
        <TaskForm />
      </div>
    </div>
  );
}

export default App;
