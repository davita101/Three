import { Canvas } from "@react-three/fiber/dist/react-three-fiber.cjs"

import NewMaterial from "./components/newModels/NewMaterial"
import { useState } from "react"

function App() {

  const [grab, setGrab] = useState(false)
  const handleGrabDown = () => {
    window.addEventListener('mousedown', () => {
      setGrab(true)
      console.log('mouse down')

    })
  }
  const handleGrabUp = () => {
    window.addEventListener('mouseup', () => {
      setGrab(false)
      console.log('mouse up')
    })
  }
  return (
    <div className="flex justify-center items-center h-[100vh] text-blue-600">
      <Canvas
        className={`${grab ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseUp={handleGrabUp}
        onMouseDown={handleGrabDown}
      >
        <NewMaterial grab={grab} />
      </Canvas>
    </div>
  )
}

export default App
