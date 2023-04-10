import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'

export function App(isHover) {
    return (
        <Canvas>
            <motion.group animate={isHover ? 'hover' : 'rest'}>
                <motion.mesh variants={{ hover: { z: 1 } }} />
            </motion.group>
        </Canvas>
    )
}