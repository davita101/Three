import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Model } from './Model'

function MaterialBox() {
    const adjustModelSizeScreen = () => {
        let screenScale = null
        let screenPosition = [1, -8, -22]
        let rotation = [.1, 4.6, 0]
        if (window.innerWidth < 756) {
            screenScale = [0.7, 0.7, 0.7]
            let screenPosition = [1, -7, -20]
        } else {
            screenScale = [1, 1, 1]
        }
        return [screenScale, screenPosition, rotation]
    }
    const [modelScale, modelPosition, rotation] = adjustModelSizeScreen()
    return (

        <Canvas>
            <directionalLight intensity={1.5} /> // დაირექშენ ნათება ანათებს შუქს
            <ambientLight /> // ღია ფერს ძლევს
            <spotLight /> // ღია უფრო ღია ფერს აძლებს
            <hemisphereLight /> // ნათრა
            <Model
                position={modelPosition}
                scale={modelScale}
                rotation={rotation}
            />
        </Canvas>
    )
}

export default MaterialBox