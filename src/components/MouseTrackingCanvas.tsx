import { useEffect, useRef } from 'react'

type HexCell = {
    x: number
    y: number
}

export default function MouseTrackingCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const mouseRef = useRef({ x: 0, y: 0, hasMoved: false })
    const gridRef = useRef<HexCell[]>([])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const context = canvas.getContext('2d')
        if (!context) return

        let animationFrameId = 0
        const hexSize = 18
        const hexWidth = Math.sqrt(3) * hexSize
        const stepX = hexWidth
        const stepY = 1.5 * hexSize

        const drawHex = (centerX: number, centerY: number) => {
            context.beginPath()
            for (let index = 0; index < 6; index += 1) {
                const angle = (Math.PI / 180) * (60 * index - 30)
                const x = centerX + hexSize * Math.cos(angle)
                const y = centerY + hexSize * Math.sin(angle)

                if (index === 0) {
                    context.moveTo(x, y)
                } else {
                    context.lineTo(x, y)
                }
            }
            context.closePath()
        }

        const resizeCanvas = () => {
            const devicePixelRatio = window.devicePixelRatio || 1
            canvas.width = Math.floor(window.innerWidth * devicePixelRatio)
            canvas.height = Math.floor(window.innerHeight * devicePixelRatio)
            canvas.style.width = `${window.innerWidth}px`
            canvas.style.height = `${window.innerHeight}px`
            context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)

            const rows = Math.ceil(window.innerHeight / stepY) + 2
            const cols = Math.ceil(window.innerWidth / stepX) + 2
            const nextGrid: HexCell[] = []

            for (let row = 0; row < rows; row += 1) {
                const offsetX = row % 2 === 0 ? 0 : stepX / 2
                for (let col = 0; col < cols; col += 1) {
                    nextGrid.push({
                        x: col * stepX + offsetX - stepX / 2,
                        y: row * stepY - hexSize,
                    })
                }
            }

            gridRef.current = nextGrid
        }

        const onMouseMove = (event: MouseEvent) => {
            mouseRef.current = { x: event.clientX, y: event.clientY, hasMoved: true }
        }

        const drawFrame = () => {
            context.clearRect(0, 0, window.innerWidth, window.innerHeight)

            const isDarkMode = document.documentElement.classList.contains('dark')
            const accentRgb = isDarkMode ? '45, 212, 191' : '37, 99, 235'
            const baseRgb = isDarkMode ? '255, 255, 255' : '15, 23, 42'
            const glowRadius = 190
            const pulse = 0.84 + Math.sin(Date.now() * 0.004) * 0.16

            gridRef.current.forEach((cell) => {
                const dx = cell.x - mouseRef.current.x
                const dy = cell.y - mouseRef.current.y
                const distance = Math.hypot(dx, dy)
                const normalized = mouseRef.current.hasMoved ? Math.max(0, 1 - distance / glowRadius) : 0
                const intensity = Math.pow(normalized, 1.8) * pulse

                drawHex(cell.x, cell.y)

                const strokeAlpha = (isDarkMode ? 0.12 : 0.08) + intensity * 0.62
                context.strokeStyle = intensity > 0
                    ? `rgba(${accentRgb}, ${strokeAlpha})`
                    : `rgba(${baseRgb}, ${strokeAlpha})`
                context.lineWidth = intensity > 0 ? 1.25 : 1
                context.stroke()

                if (intensity > 0.1) {
                    drawHex(cell.x, cell.y)
                    context.fillStyle = `rgba(${accentRgb}, ${0.14 * intensity})`
                    context.fill()
                }
            })

            animationFrameId = window.requestAnimationFrame(drawFrame)
        }

        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)
        window.addEventListener('mousemove', onMouseMove)
        animationFrameId = window.requestAnimationFrame(drawFrame)

        return () => {
            window.cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', resizeCanvas)
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
}
