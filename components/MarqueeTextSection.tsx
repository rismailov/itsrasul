import { MarqueeItem } from '@/lib/utils'
import { useEffect, useRef } from 'react'

export const MarqueeTextSection = ({ text }: { text: string }) => {
    const rootRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (rootRef.current) {
            const items = rootRef.current.querySelectorAll(
                '[data-marquee-item]',
            )

            new MarqueeItem(items[0] as HTMLHeadingElement, -5, 0.1)
            new MarqueeItem(items[1] as HTMLHeadingElement, -105, 0.1)
        }
    }, [])

    return (
        <div className="border-b">
            <div className="container overflow-x-hidden">
                <div ref={rootRef} className="relative h-20 md:h-32 lg:h-44">
                    {[...Array(2)].map((_, wrapperKey) => (
                        <div
                            key={wrapperKey}
                            data-marquee-item
                            className="absolute top-0 bottom-0 flex items-center space-x-3"
                        >
                            {[...Array(2)].map((_, idx) => (
                                <h1
                                    key={idx}
                                    className="whitespace-nowrap text-3xl md:text-[7vw] 2xl:text-6xl font-light select-none"
                                >
                                    {text}&nbsp;
                                </h1>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
