import React, { useState } from "react"
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'

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
        <form className="create-note">
            <input name="title" placeholder="Title" onChange={handleChange} value={noteText.title} />
            <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={noteText.content} />
            <Zoom in="true">
                <Fab onClick={handleClick}><AddIcon /></Fab>
            </Zoom>
        </form>
    </div >
}

export { CreateArea }