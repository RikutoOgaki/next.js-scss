import * as React from 'react'
import { motion } from 'framer-motion'
import styles from './style.module.scss'

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
}

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
    const style = { border: `1px solid ${colors[i]}` }
    return (
        <>
            <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: .95 }}
                className={styles.li}
            >
                <div className={styles.iconplaceholder} style={style} />
                <div className={styles.textplaceholder} style={style} />
            </motion.li>
        </>
    )
}