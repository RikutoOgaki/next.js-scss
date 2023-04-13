import { useEffect, useRef } from 'react'

export const useDimentions = ref => {
    const dimention = useRef({ width: 0, height: 0 })

    useEffect(() => {
        dimention.current.width = ref.current.offsetWidth
        dimention.current.height = ref.current.offsetHeight
    }, [])

    return dimention.current
}