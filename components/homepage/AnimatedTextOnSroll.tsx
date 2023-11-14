import { useGsapContext } from '@/context/gsap-provider'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import SplitType from 'split-type'

export const AnimatedTextOnSroll = ({
    className,
    text,
}: {
    className: string
    text: string
}) => {
    const ref = useRef<HTMLHeadingElement | null>(null)
    const ctx = useGsapContext(ref)

    useLayoutEffect(() => {
        const splitText = SplitType.create(ref.current as HTMLHeadingElement, {
            types: 'words,chars,lines',
        })

        // animate by lines if there is more than 1 word.
        const animateBy = splitText!.words!.length > 1 ? 'lines' : 'words'

        ctx.add(() => {
            gsap.registerPlugin(ScrollTrigger)

            splitText[animateBy]!.forEach((word) => {
                const chars = word.querySelectorAll('.char')

                chars.forEach((char) =>
                    gsap.set(char.parentNode, { perspective: 2000 }),
                )

                gsap.fromTo(
                    chars,
                    {
                        'will-change': 'opacity, transform',
                        opacity: 0,
                        rotationX: -90,
                        yPercent: 50,
                    },
                    {
                        ease: 'power1.inOut',
                        opacity: 1,
                        rotationX: 0,
                        yPercent: 0,
                        stagger: {
                            each: 0.03,
                            from: 0,
                        },
                        scrollTrigger: {
                            trigger: word,
                            start: 'center bottom+=20%',
                            end: 'bottom center-=30%',
                            // scrub: 0.9,
                        },
                    },
                )
            })
        })

        // clean-up
        return () => {
            splitText.revert()
            ctx.revert()
        }
    }, [])

    return (
        <h1 ref={ref} className={className}>
            {text}
        </h1>
    )
}
