import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [followState, setFollowState] = useState<boolean>(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {

    const handleMove = (e: PointerEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    if (followState) {
      window.addEventListener('pointermove', handleMove)
    } else {
      setMousePosition({ x: 0, y: 0 })
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [followState])

  return (
    <>
      <main>
        <div style={
          {
            position: 'absolute',
            backgroundColor: '#5345f5',
            borderRadius: '50%',
            opacity: 0.5,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }
        }/>
        <h3>Mouse Follower</h3>
        <button
          onClick={() => setFollowState(!followState) }>
          {followState ? 'Desactivar' : 'Activar'} seguir cursor
        </button>
      </main>
    </>
  )
}

export default App
