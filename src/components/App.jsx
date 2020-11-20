import React, { useState } from 'react'
import { Header } from './Header'
import { Note } from './Note'
import { Footer } from './Footer'
import { CreateArea } from './CreateArea'

function App() {

    const [allNotes, setAllNotes] = useState([])

    function addNote(newNote) {
        setAllNotes([...allNotes, newNote])
    }

    return <div>
        <Header />
        <CreateArea
            addNote={addNote} />
        {allNotes.map((note, index) => <Note
            title={note.title}
            content={note.content}
            key={index}
        />
        )}
        <Footer />
    </div>
}

export { App }