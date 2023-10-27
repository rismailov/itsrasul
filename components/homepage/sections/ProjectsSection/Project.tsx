import { useGsapContext } from '@/context/gsap-provider'
import { closestEdge } from '@/lib/utils'
import clsx from 'clsx'
import gsap from 'gsap'
import { MouseEvent, useLayoutEffect, useRef } from 'react'
import classes from './Project.module.css'
import { STACKS, StackSprite } from './sprites/StackSprite'

export const Project = ({
    stacks,
    title,
    url,
}: {
    stacks: (typeof STACKS)[keyof typeof STACKS][]
    title: string
    url: string
}) => {
    // elements
    const rootRef = useRef<HTMLAnchorElement | null>(null)
    const marqueeRef = useRef<HTMLDivElement | null>(null)
    const marqueeInnerRef = useRef<HTMLDivElement | null>(null)

    // context
    const ctx = useGsapContext(rootRef)

    // timelines
    const tlEnterGetter = useRef<(e: MouseEvent) => GSAPTimeline>()
    const tlLeaveGetter = useRef<(e: MouseEvent) => GSAPTimeline>()

    function findClosestEdge(event: MouseEvent) {
        if (rootRef.current) {
            const rect = rootRef.current.getBoundingClientRect()

            const x = event.clientX - rect.left
            const y = event.clientY - rect.top

            return closestEdge(x, y, rect.width, rect.height)
        }
    }

    useLayoutEffect(() => {
        if (rootRef.current) {
            ctx.add(() => {
                const marquee = marqueeRef.current
                const marqueeInner = marqueeInnerRef.current

                gsap.defaults({ duration: 0.75, ease: 'expo' })

                tlEnterGetter.current = (event: MouseEvent) => {
                    const edge = findClosestEdge(event)

                    return gsap
                        .timeline({ paused: true })
                        .to(rootRef.current!, {
                            paddingLeft: 30,
                            paddingRight: 30,
                        })
                        .set(
                            marquee,
                            // prettier-ignore
                            { y: edge === 'top' ? '-101%' : '101%' },
                            0,
                        )
                        .set(
                            marqueeInner,
                            // prettier-ignore
                            { y: edge === 'top' ? '101%' : '-101%' },
                            0,
                        )
                        .to([marquee, marqueeInner], { y: '0%' }, 0)
                }

                tlLeaveGetter.current = (event: MouseEvent) => {
                    const edge = findClosestEdge(event)

                    return gsap
                        .timeline({ paused: true })
                        .to(rootRef.current!, {
                            paddingLeft: 0,
                            paddingRight: 0,
                        })
                        .to(
                            marquee,
                            { y: edge === 'top' ? '-101%' : '101%' },
                            0,
                        )
                        .to(
                            marqueeInner,
                            { y: edge === 'top' ? '101%' : '-101%' },
                            0,
                        )
                }
            })

            return () => ctx.revert()
        }
    }, [])

    function onMouseEnter(event: MouseEvent) {
        if (tlEnterGetter.current) {
            const tl = tlEnterGetter.current(event)

            tl.play()
        }
    }

    function onMouseLeave(event: MouseEvent) {
        if (tlLeaveGetter.current) {
            const tl = tlLeaveGetter.current(event)

            tl.play()
        }
    }

    return (
        <a
            href={url}
            target="_blank"
            ref={rootRef}
            className="relative overflow-hidden border-t group"
        >
            {/* CONTENT */}
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="relative flex items-center z-10 h-full py-5"
            >
                {/* title */}
                <div className="w-1/3">
                    <h3 className="text-xl font-medium font-heading text-foreground group-hover:text-background transition-colors">
                        {title}
                    </h3>
                </div>

                {/* stack */}
                <div className="h-full flex items-center space-x-5 [&>svg]:w-7 [&>svg]:h-7">
                    {stacks.map((stack) => (
                        <StackSprite key={stack} stack={stack} />
                    ))}
                </div>

                {/* arrow */}
                <div className="ml-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="stroke-foreground group-hover:stroke-background transition-colors"
                    >
                        <path
                            d="M2 22L21 3"
                            strokeWidth="2"
                            strokeLinecap="square"
                        />
                        <path
                            d="M12 2H22V12"
                            strokeWidth="2"
                            strokeLinecap="square"
                        />
                    </svg>
                </div>
            </div>

            {/* HOVER LAYER */}
            <div
                ref={marqueeRef}
                className={clsx(
                    'absolute top-0 left-0 overflow-hidden w-full h-full pointer-events-none bg-white',
                    classes.marquee,
                )}
            >
                <div
                    ref={marqueeInnerRef}
                    className={clsx(
                        'w-full h-full',
                        classes['marquee__inner--wrap'],
                    )}
                >
                    <div
                        className="h-full w-full flex items-center relative will-change-transform"
                        aria-hidden="true"
                    ></div>
                </div>
            </div>
        </a>
    )
}
