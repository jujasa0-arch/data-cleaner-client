import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [serverStatus, setServerStatus] = useState(null)
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(res => res.json())
      .then(data => setServerStatus(data.message)
      .catch(err => setError('could not connect to server'))
    )
  }, []);

  return (
    <>
      <div>
        <h1>Client Side</h1>
         {error && <p style={{ color: 'red' }}>{error}</p>}
      {serverStatus ? (
        <p style={{ color: 'green' }}>✅ {serverStatus}</p>
      ) : (
        <p>Connecting to server...</p>
      )}
      </div>
    </>
  )
}

export default App
