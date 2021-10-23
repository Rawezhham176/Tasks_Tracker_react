import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return <div className={`task ${task.reminder ? "reminder" : ""}`} 
    onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text} <FaTimes className='icon' onClick={() => onDelete(task.id)}
         /></h3>
        <h4>{task.DayAndTime}</h4>
    </div>
}

export default Task