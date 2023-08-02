'use client'

import { useState } from 'react'

export default function Home() {

  const [value, setValue] = useState('AUDI')

  return (
    <main className="flex gap-2 justify-center items-center">
      <h1>Home page</h1>
      <button
        className="px-2 p-2 border bg-blue-500 rounded text-white"
      >
        Click Me
      </button>
      <div>
        <label htmlFor="random-text">Enter random Text</label>
        <input id="random-text" type="text" />
      </div>
      <div>
        <label htmlFor="specific-text">Enter specific Text</label>
        <input id="specific-text" type="text" />
      </div>
      <div>
        <input type="text" placeholder="Search..." />
      </div>
      <div>
        <input type="text" defaultValue={value} onChange={(e) => setValue(e.target.value)}/>
      </div>
    </main>
  )
}
