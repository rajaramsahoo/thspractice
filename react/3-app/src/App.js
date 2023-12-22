import './App.css';
import Note from './Components/Note';
import { useState } from 'react';

function App() {
  let sampleArray = [{ title: 'The Hacking School', content: "Study about the react" },
  { title: 'W3 School', content: "Study about the HTMl" },
  { title: 'ChatGpt', content: "Study about the DOM" }]

  const [notes, setNotes] = useState(sampleArray)
  const [note, setNote] = useState({
    title: "",

    content: ""
  })

  function onHandleChange(e) {
    console.log(e.target.name, e.target.value)

    setNote({
      ...note,
      [e.target.name]: e.target.value
    })
  }

  function addNote(e) {
    e.preventDefault()
    if (note.title.trim() && note.content.trim()){
      console.log("submited")
      setNotes([
        ...notes,
        note
      ])
      setNote({
        title: "",
        content: ""
      })
    }
    else {
      alert("Enter Title and content")
    }
  }

  function onDelete(index){
    // e.preventDefault();
   let DeleteNote = [...notes]
   DeleteNote.splice(index ,1)
   setNotes(DeleteNote);
  }

  return (
    <div>
      <form>
        <label>
          Title :
          <input type="text" onChange={onHandleChange} name='title' value={note.title} />
        </label>
        <label>
          Content :
          <input type="text" onChange={onHandleChange} name='content' value={note.content} />
        </label>
        <button onClick={addNote}>Add Note</button>
      </form>
      {notes.map((ele, index) => {
        return (
          <>
          <Note key={index} title={ele.title} content={ele.content} />
          <button onClick={()=>onDelete(index)}>❤️</button>
          </>
        )
      })}
      
    </div>


  )
}


export default App;
