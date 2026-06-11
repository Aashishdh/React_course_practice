import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  useEffect(() => {
    console.log('use effect is running....')
  }, [])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      {/* Flex container with gap */}
      <div className="flex gap-4">
        <button
          onClick={() => setA(a + 1)}
          className="bg-blue-400 text-white px-4 py-2"
        >
          A
        </button>

        <button
          onClick={() => setB(b - 1)}
          className="bg-green-400 text-white px-4 py-2"
        >
          B
        </button>
      </div>
    </div>
  )
}

export default App
