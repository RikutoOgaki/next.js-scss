import * as THREE from 'three'
import * as REACT from 'react'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh, Vector3 } from 'three'
import style from './app.module.css'

function Box(props: JSX.IntrinsicElements['mesh']) {

    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)


    useFrame((state, delte) => (ref.current.rotation.y += .02))
    useFrame((state, delte) => (ref.current.rotation.x += .02))

    return (
        <mesh
            {...props}
            ref={ref}
            scale={hovered ? 1.5 : 1}
            onClick={(e) => click(!clicked)}
            onPointerOver={(e) => hover(true)}
            onPointerOut={(e) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={clicked ? 'hotpink' : 'blue'} />
        </mesh>
    )
}

export default function App() {
    const Rig = ({ v = new Vector3() }) => {
        return useFrame((state) => {
            state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), .09)
        })
    }
    return (
        <div className={style.box}>
            <Canvas>
                <ambientLight intensity={.5} />
                <Rig />
                <spotLight position={[10, 10, 10]} angle={.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
                <Box position={[0, 0, -10]} />
            </Canvas>
        </div>
    )
}