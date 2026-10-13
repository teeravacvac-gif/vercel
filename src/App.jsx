import React from 'react'
import Note from './pages/Note'
import NoteView from './pages/NoteView'
import { Routes,Route } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<NoteView />} />
      <Route path='/note/:id' element={<Note />} />
    </Routes>
    </>
  )
}

export default App