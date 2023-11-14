import { useGsapContext } from '@/context/gsap-provider'
import { closestEdge } from '@/lib/utils'
import clsx from 'clsx'
import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import classes from './Project.module.css'

export const Project = ({
    category,
    title,
    number,
}: {
    category: string
    title: string
    number: number
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
                            paddingLeft: 28,
                            paddingRight: 28,
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
            ref={rootRef}
            href="#"
            target="_blank"
            className="relative overflow-hidden py-4 border-t group"
            // @ts-ignore
            onMouseEnter={onMouseEnter}
            // @ts-ignore
            onMouseLeave={onMouseLeave}
        >
            {/* content */}
            <div className="relative z-10 flex flex-col space-y-8">
                {/* header */}
                <div className="flex justify-between text-sm text-muted-foreground group-hover:text-background/60 transition-colors duration-300 font-paragraph">
                    <p>{category}</p>
                    <p>00{number}</p>
                </div>

                {/* content */}
                <div className="flex items-end justify-between">
                    <h2 className="uppercase text-7xl font-light group-hover:text-background transition-colors duration-300">
                        {title}
                    </h2>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 group-hover:text-background transition-colors duration-300"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M5 17.59 15.59 7H9V5h10v10h-2V8.41L6.41 19 5 17.59Z"
                        />
                    </svg>
                </div>
            </div>

            {/* hover layer */}
            <div
                ref={marqueeRef}
                className={clsx(
                    'absolute top-0 left-0 overflow-hidden w-full h-full pointer-events-none bg-foreground dark:bg-accent',
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
