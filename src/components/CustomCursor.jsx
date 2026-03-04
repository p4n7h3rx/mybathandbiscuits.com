import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false)
    const [isPointer, setIsPointer] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 400 }
    const x = useSpring(cursorX, springConfig)
    const y = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)

            const target = e.target
            setIsPointer(window.getComputedStyle(target).cursor === 'pointer')
            setIsHovered(target.closest('.magnetic') !== null)
        }

        window.addEventListener('mousemove', moveCursor)
        return () => window.removeEventListener('mousemove', moveCursor)
    }, [cursorX, cursorY])

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border border-sage/60 rounded-full pointer-events-none z-[100]"
            style={{
                x,
                y,
                translateX: '-50%',
                translateY: '-50%',
                scale: isPointer ? 1.5 : 1,
                backgroundColor: isHovered ? 'rgba(168, 198, 134, 0.4)' : 'rgba(255, 255, 255, 0.1)',
                backdropFilter: isHovered ? 'blur(4px)' : 'none'
            }}
        />
    )
}
