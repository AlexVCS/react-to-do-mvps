import { useState, useContext } from "react";
import { useTasks, useTasksDispatch } from "./ListContext";

export default function TaskList() {
    const tasks = useTasks()
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    )
}

function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useTasksDispatch()
    let taskContext
    if (isEditing) {
        taskContext = (
            <>
            <input
            value={task.text}
            onChange={e => {
                dispatch({
                    type: 'changed',
                    task: {
                        ...task,
                        text: e.target.value
                    }
                })
            }} />
            <button onClick={() => setIsEditing(false)}>
                Save
            </button>
            </>
        )
    } else {
        taskContext = (
            <>
            {task.text}
            <button onClick={() => setIsEditing(true)}>
                Edit
            </button>
            </>
        )
    }
    return (
        <label>
            <input
            type="checkbox"
            checked={task.done}
            onChange={e => {
                dispatch({
                    type: 'changed',
                    task: {
                        ...task,
                        done: e.target.checked
                    }
                })
            }}
            />
            {taskContext}
            <button onClick={() => {
                dispatch({
                    type: 'deleted',
                    id: task.id
                })
            }}>
                Delete
            </button>
        </label>
    )
}