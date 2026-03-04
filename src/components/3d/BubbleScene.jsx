import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

function Bubble({ position, scale, speed, opacity }) {
    const meshRef = useRef()
    const initialY = position[1]
    const wobbleOffset = useMemo(() => Math.random() * Math.PI * 2, [])

    useFrame((state) => {
        if (!meshRef.current) return
        const t = state.clock.elapsedTime

        // Float upward and reset
        meshRef.current.position.y += speed * 0.008
        if (meshRef.current.position.y > 6) {
            meshRef.current.position.y = initialY - 3
        }

        // Gentle sinusoidal wobble
        meshRef.current.position.x += Math.sin(t * 0.5 + wobbleOffset) * 0.003
        meshRef.current.rotation.x = Math.sin(t * 0.3 + wobbleOffset) * 0.2
        meshRef.current.rotation.z = Math.cos(t * 0.2 + wobbleOffset) * 0.2

        // Sophisticated soft-body-like scale pulse
        const pulseFactor = 1 + Math.sin(t * 1.2 + wobbleOffset) * 0.08
        meshRef.current.scale.setScalar(scale * pulseFactor)
    })

    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
                color="#ffffff"
                transparent
                opacity={opacity * 0.7}
                roughness={0.2}
                metalness={0.1}
            />
        </mesh>
    )
}

function GoldenParticles({ count = 60 }) {
    const pointsRef = useRef()
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 16
            arr[i * 3 + 1] = (Math.random() - 0.5) * 10
            arr[i * 3 + 2] = (Math.random() - 0.5) * 8
        }
        return arr
    }, [count])

    useFrame((state) => {
        if (!pointsRef.current) return
        pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
        pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1
    })

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={count}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                color="#C9A96E"
                size={0.04}
                transparent
                opacity={0.7}
                sizeAttenuation
            />
        </points>
    )
}

function Scene() {
    const bubbles = useMemo(() => {
        const items = []
        for (let i = 0; i < 20; i++) {
            items.push({
                id: i,
                position: [
                    (Math.random() - 0.5) * 16,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 8 - 3,
                ],
                scale: 0.1 + Math.random() * 0.5,
                speed: 0.2 + Math.random() * 0.8,
                opacity: 0.1 + Math.random() * 0.2,
            })
        }
        return items
    }, [])

    return (
        <>
            <Environment preset="studio" />
            <ambientLight intensity={0.5} color="#FDF8F0" />
            <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={1}
                color="#ffffff"
            />
            <directionalLight
                position={[-5, 5, 5]}
                intensity={0.5}
                color="#C9A96E"
            />

            {bubbles.map((b) => (
                <Bubble key={b.id} {...b} />
            ))}

            <GoldenParticles count={80} />

            <fog attach="fog" args={['#FDF8F0', 8, 20]} />
        </>
    )
}

export default function BubbleScene() {
    return (
        <div className="absolute inset-0 hero-canvas">
            <Canvas
                camera={{ position: [0, 0, 7], fov: 50 }}
                dpr={1}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance',
                    precision: 'mediump'
                }}
                style={{ background: 'transparent' }}
            >
                <Scene />
            </Canvas>
        </div>
    )
}
