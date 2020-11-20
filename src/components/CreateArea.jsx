import React, { useState } from "react";

function CreateArea(props) {

    const [noteText, setNoteText] = useState({ title: "", content: "" })

    function handleChange(event) {
        const { name, value } = event.target
        setNoteText(prevText => ({ ...prevText, [name]: value }))
    }

    function handleClick(event) {
        event.preventDefault()
        props.addNote(noteText)
        setNoteText({ title: "", content: "" })
    }

    return <div>
        <form>
            <input name="title" placeholder="Title" onChange={handleChange} value={noteText.title} />
            <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={noteText.content} />
            <button onClick={handleClick}>Add</button>
        </form>
    </div >
}

export { CreateArea }