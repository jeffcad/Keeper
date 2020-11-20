import React, { useState } from "react";

function CreateArea() {

    const [noteText, setNoteText] = useState({ title: "", content: "" })

    function handleChange(event) {
        const { name, value } = event.target
        switch (name) {
            case "title":
                setNoteText(Object.assign({}, noteText, { title: value }))
                break
            case "content":
                setNoteText(Object.assign({}, noteText, { content: value }))
                break
            default:
                console.log("Error: element name is not recognised")
        }
    }

    return <div>
        <form>
            <input name="title" placeholder="Title" onChange={handleChange} value={noteText.title} />
            <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={noteText.content} />
            <button>Add</button>
        </form>
    </div>
}

export { CreateArea }