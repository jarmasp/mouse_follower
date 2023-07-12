import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    console.log('effect', {enabled})
  }, [enabled])

  return ( 
    <>
      <h3>
        <button onClick={() => { setEnabled(!enabled) }}>
          mouse follower {enabled ? 'off' : 'on'} 
        </button>
      </h3>
    </>
  )
}

export default App
