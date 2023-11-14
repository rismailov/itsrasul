import { MarqueeItem } from '@/lib/utils'
import { useEffect, useRef } from 'react'

export const MarqueeTextSection = ({ text }: { text: string }) => {
    const rootRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (rootRef.current) {
            const items = rootRef.current.querySelectorAll(
                '[data-marquee-item]',
            )

            new MarqueeItem(items[0] as HTMLHeadingElement, 0, 0.1)
            new MarqueeItem(items[1] as HTMLHeadingElement, -100, 0.1)
        }
    }, [])

    return (
        <div ref={rootRef} className="relative h-44 border-b">
            <div
                data-marquee-item
                className="absolute top-0 bottom-0 flex items-center space-x-3"
            >
                {[...Array(2)].map((_, idx) => (
                    <h1
                        key={idx}
                        className="whitespace-nowrap text-[9vw] font-light select-none"
                    >
                        {text}&nbsp;
                    </h1>
                ))}
            </div>

            <div
                data-marquee-item
                className="absolute top-0 bottom-0 flex items-center space-x-3"
            >
                {[...Array(2)].map((_, idx) => (
                    <h1
                        key={idx}
                        className="whitespace-nowrap text-[9vw] font-light select-none"
                    >
                        {text}&nbsp;
                    </h1>
                ))}
            </div>
        </div>
    )
}
