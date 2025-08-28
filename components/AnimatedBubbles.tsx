import { useMemo } from "react"

export function AnimatedBubbles() {
    const bubbles = useMemo(
        () =>
            Array.from({ length: 20 }).map((_, i) => ({
                id: i,
                size: Math.random() * 40 + 10,    // 10px–50px
                left: Math.random() * 100,        // 0%–100%
                delay: Math.random() * -20,       // start at random points
            })),
        []
    )

    return (
        <div className="animated-bubbles">
            {bubbles.map((b) => (
                <div
                    key={b.id}
                    className="bubble"
                    style={{
                        width: `${b.size}px`,
                        height: `${b.size}px`,
                        left: `${b.left}%`,
                        animationDelay: `${b.delay}s`,
                    }}
                />
            ))}
        </div>
    )
}
