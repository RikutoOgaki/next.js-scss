import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh, Vector3 } from 'three'
import style from './app.module.scss'

function Box(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const [clicked, click] = useState(false)


    return (
        <mesh
            {...props}
            ref={ref}
            onClick={(e) => click(!clicked)}
            scale={clicked ? .5 : 1}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial />
        </mesh>
    )
}

export default function Sample04() {
    const Rig = (({ v = new Vector3() }) => {
        return useFrame((state) => {
            state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), .05)
        })
    })
    return (
        <>
            <div className={style.wrap}>
                <Canvas>
                    <ambientLight intensity={.5} />
                    <Rig />
                    <spotLight position={[10, 10, 0]} angle={.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <Box position={[-1.2, 0, 0]} />
                </Canvas>
            </div>
        </>
    )
}