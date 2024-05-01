import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Sphere } from '@react-three/drei';
import { TextureLoader } from 'three';
import PyramidGeometry from './PyramidGeometry';

const ThreeScene = () => {
    const InteractiveSphere = () => {
        const sphereRef = useRef();

        useFrame(() => {
            if (sphereRef.current) {
                sphereRef.current.rotation.x += 0.1;
                sphereRef.current.rotation.y += 0.01;
            }
        });

        const texture = new TextureLoader().load("./avatar.jpg");

        return (
            <Sphere ref={sphereRef} castShadow position={[2, 0, 0]} onClick={() => alert('Davita is Goat')}>
                <meshStandardMaterial attach="material" map={texture} />
            </Sphere>
        );
    };

    return (
        <Canvas shadows>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[5, 5, 5]} // Position the light higher in the sky
                castShadow
                intensity={1}
                shadow-mapSize={[1024, 1024]}
                shadow-bias={-0.001}
                shadow-radius={4}
            />
            <pointLight position={[0, 5, 0]} intensity={1.5} />
            <spotLight position={[0, 5, 0]} angle={Math.PI / 4} intensity={1.5} />
            <Box position={[-2, 0, 0]} castShadow />
            <InteractiveSphere />
            <Box position={[0, -2, 0]} receiveShadow args={[10, 0.5, 20]} >
                <meshStandardMaterial attach='material' color='lightblue' />
            </Box>
            <PyramidGeometry />
        </Canvas>
    );
};

export default ThreeScene;
