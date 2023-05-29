import React, { useState } from 'react'
import '../style/TaskForm.css'
import { v4 as uuidv4 } from 'uuid'

function TaskForm(props) {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        }

        props.onSubmit(newTask)
    }

    return (
        <div>
            <form
            className='task-form'
            onSubmit={handleSubmit}>
                <input 
                    className='task-input'
                    type='text'
                    placeholder='Insert Task'
                    name='text'
                    onChange={handleChange}
                />
                <button
                    className='task-button'>
                    Add Task
                </button>
            </form>
        </div>
    )
}

export default TaskForm
