'use client'

import { useState } from 'react'

export default function AboutPage() {

  const [showText, setShowText] = useState(false)

  return (
    <div className='flex flex-col gap-2'>
        <h1>About page</h1>
        {showText && <span>This is the text!</span>}
        <button
          className='bg-blue-500 max-w-max px-4 py-2 text-white rounded-md'
          onClick={() => setShowText(!showText)}
        >
          Show
        </button>
    </div>
  )
}
