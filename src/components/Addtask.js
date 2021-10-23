import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [DayAndTime, setTime] = useState('')
    const [reminder, setReminde] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert("Please add text!")
            return
        }

        onAdd({text, DayAndTime, reminder})

        setText("")
        setTime("")
        setReminde(false)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input
                 type="text" 
                 placeholder="Add Task" 
                 value={text} 
                 onChange={(e) => setText(e.target.value)}
                 />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input 
                 type="text" 
                 placeholder="Add Day & Time"
                 value={DayAndTime} 
                 onChange={(e) => setTime(e.target.value)}
                 />
            </div>
            <div className="form-control checklabel">
                <label className="setReminder">Set Reminder</label>
                <input 
                    type="checkbox"
                    checked={reminder}
                    value={reminder} 
                    onChange={(e) => setReminde(e.currentTarget.checked)}
                    />
            </div>

            <input 
                type="submit"
                value='Save Task' 
                className="btn btn-block"/>
        </form>
    )
}

export default AddTask