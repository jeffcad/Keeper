import React, { useState } from "react"
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'

function CreateArea(props) {

    const [noteText, setNoteText] = useState({ title: "", content: "" })
    const [isExpanded, setIsExpanded] = useState(false)

    function handleChange(event) {
        const { name, value } = event.target
        setNoteText(prevText => ({ ...prevText, [name]: value }))
    }

    function handleClick(event) {
        event.preventDefault()
        props.addNote(noteText)
        setNoteText({ title: "", content: "" })
    }

    function expand() {
        setIsExpanded(true)
    }

    return <div>
        <form className="create-note">
            {isExpanded ? <input name="title" placeholder="Title" onChange={handleChange} value={noteText.title} /> : null}
            <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} onChange={handleChange} onClick={expand} value={noteText.content} />
            <Zoom in={isExpanded ? true : false}>
                <Fab onClick={handleClick}><AddIcon /></Fab>
            </Zoom>
        </form>
    </div >
}

export { CreateArea }