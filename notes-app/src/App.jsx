import React, { useState } from 'react'
import bag from './assets/note.png'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submithandler = (e) => {
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({
      title: title,
      details: details
    })
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }

  // 🗑️ Delete handler
  const deleteHandler = (idx) => {
    const copyTask = task.filter((_, i) => i !== idx)
    setTask(copyTask)
  }

  return (
    <div className="h-screen bg-black lg:flex text-white">
      <form
        className="flex p-10 lg:w-1/2 flex-col gap-8"
        onSubmit={submithandler}
      >
        <h1 className="text-xl font-bold">Add your note</h1>

        <input
          type="text"
          placeholder="Upload your notes"
          className="border-2 border-gray-400 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          name="msg"
          id="msg"
          placeholder="enter your msg"
          className="border-2 outline-none border-gray-400"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className="bg-white text-black px-5 py-2 rounded active:bg-gray-400">
          Add Note
        </button>
      </form>

      <div className="lg:w-1/2 p-10 lg:border-l-2">
        <h1 className="text-xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 overflow-auto h-full">
          {task.map((elem, idx) => (
            <div
              key={idx}
              className="h-32 w-32 rounded-2xl mt-5 text-orange-300 p-4 bg-cover bg-center"
              style={{ backgroundImage: `url(${bag})` }}
            >
              <h3 className="font-bold text-xl">{elem.title}</h3>
              <p className="text-sm text-gray-300">{elem.details}</p>
              <button
                onClick={() => deleteHandler(idx)}
                className="bg-red-500 mt-2 p-1.5 rounded-xl text-white text-xs"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
