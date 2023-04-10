import { motion } from 'framer-motion'
import { App } from './components/App'
import { useState } from 'react'

export default function Sample05() {

    const [isHover, setIsHover] = useState(false)

    return (
        <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(true)}
        >
            <App isHover={isHover} />
        </motion.button>
    )
}

