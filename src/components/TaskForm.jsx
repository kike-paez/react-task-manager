import React from 'react'
import '../style/TaskForm.css'

function TaskForm(props) {
    return (
        <div>
            <form className='task-form'>
                <input 
                    className='task-input'
                    type='text'
                    placeholder='Insert Task'
                    name='text' 
                />
                <button className='task-button'>
                    Add Task
                </button>
            </form>
        </div>
    )
}

export default TaskForm
