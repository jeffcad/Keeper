import React, { useState } from 'react'
import { Header } from './Header'
import { Note } from './Note'
import { Footer } from './Footer'
import { CreateArea } from './CreateArea'

function App() {

    const [allNotes, setAllNotes] = useState([])

    function addNote(newNote) {
        setAllNotes(prevNotes => [...prevNotes, newNote])
    }

    function deleteNote(idToDelete) {
        setAllNotes(prevNotes => prevNotes.filter((note, index) => index !== idToDelete))
    }

    return <div>
        <Header />
        <CreateArea
            addNote={addNote} />
        {allNotes.map((note, index) => <Note
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
            id={index}
            key={index}
        />
        )}
        <Footer />
    </div>
}

export { App }