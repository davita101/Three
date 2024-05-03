import { Box } from "@react-three/drei"
import { useThree, useFrame } from "@react-three/fiber/dist/react-three-fiber.cjs"

import { useRef } from "react"
function NewMaterial({ grab, ...props }) {
    const meshRef = useRef()
    const { mouse } = useThree()
    useFrame(() => {
        if (grab) {
            meshRef.current.rotation.y = mouse.x * Math.PI
            meshRef.current.rotation.x = mouse.y * -.5
        }
    })
    return (
        <mesh
            ref={(meshRef)}
        >
            <ambientLight />
            <directionalLight />
            <Box>
                <meshStandardMaterial color={'pink'} />
            </Box>
            <meshStandardMaterial />
        </mesh >
    )
}

export default NewMaterial
