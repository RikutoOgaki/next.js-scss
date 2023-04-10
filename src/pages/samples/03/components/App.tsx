import * as THREE from 'three'
import * as REACT from 'react'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props: JSX.IntrinsicElements['mesh']) {

    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    useFrame((state, delte) => (ref.current.rotation.x += .01))

    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(e) => click(!clicked)}
            onPointerOver={(e) => hover(true)}
            onPointerOut={(e) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default function App() {
    return (
        <Canvas>
            <ambientLight intensity={.5} />
            <spotLight position={[10, 10, 10]} angle={.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    )
}