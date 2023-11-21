'use client'

import { useAppContext } from '@/context/app-provider'
import { gsap } from 'gsap'
import { useEffect, useLayoutEffect, useRef } from 'react'

export const HeroSection = () => {
    const rootRef = useRef<HTMLDivElement>(null)
    const eyelidTopRef = useRef<HTMLDivElement>(null)
    const eyelidBottomRef = useRef<HTMLDivElement>(null)

    // pupilRef created in app-context because we need to track
    // the whole page (not just hero section) to animate pupil.
    // plus this way we avoid prop drilling
    const { pupilRef } = useAppContext()

    const timelineRef = useRef<GSAPTimeline>(
        gsap.timeline({
            paused: true,
            repeat: -1,
            repeatDelay: 4,
            defaults: {
                ease: 'none',
                duration: 0.15,
            },
        }),
    )

    // setup blinking timeline
    useLayoutEffect(() => {
        if (!rootRef.current) {
            return
        }

        const ctx = gsap.context(() => {
            const eyelidTop = eyelidTopRef.current
            const eyelidBottom = eyelidBottomRef.current

            // remove opacity that was set to hide eyelids until the page loads
            gsap.set([eyelidTop, eyelidBottom], { opacity: 1 })

            // set initial positions for eyelids
            gsap.set(eyelidTop, { yPercent: -101 })
            gsap.set(eyelidBottom, { yPercent: 101 })

            // set timeline
            timelineRef.current
                // close the eye
                .to([eyelidTop, eyelidBottom], {
                    yPercent: 0,
                })
                // open the eye
                .to(eyelidTop, { yPercent: -101 })
                .to(eyelidBottom, { yPercent: 101 }, '<')
        }, [rootRef])

        return () => ctx.revert()
    }, [])

    // play blinking timeline after timeout because it just
    // looks weird when it blinks instantly after page loads
    useEffect(() => {
        if (!timelineRef.current) {
            return
        }

        const timeout = setTimeout(() => {
            timelineRef.current!.play()
        }, 2000)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <section ref={rootRef}>
            <div className="container border-b">
                <div className="w-full flex flex-col sm:flex-row">
                    <div className="flex-1 flex flex-col items-center sm:items-start justify-between leading-none pt-8 sm:pb-8 sm:edge-padding-r sm:border-r">
                        <h1 className="text-xl sm:text-2xl text-center sm:text-left uppercase">
                            Full-stack Web Developer with a meticulous eye for
                            detail
                        </h1>

                        {/* eye */}
                        <div className="relative overflow-hidden mt-8 sm:mt-0">
                            {/* top eyelid */}
                            <div
                                ref={eyelidTopRef}
                                className="absolute z-[1] left-0 right-0 top-0 bg-background h-1/2"
                            ></div>

                            {/* bottom eyelid */}
                            <div
                                ref={eyelidBottomRef}
                                className="absolute z-[1] left-0 right-0 bottom-0 bg-background h-1/2"
                            ></div>

                            <svg
                                width="150"
                                viewBox="0 0 201 108"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="relative"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M100.868 108C142.015 108 177.719 81.6628 195.495 65.7958C202.657 59.4028 202.657 48.7194 195.495 42.3264C177.719 26.4595 142.015 0.121979 100.868 0.121979C59.72 0.121979 24.0163 26.4595 6.24004 42.3265C-0.922137 48.7194 -0.922129 59.4028 6.24005 65.7958C24.0163 81.6628 59.72 108 100.868 108Z"
                                    className="fill-foreground dark:fill-accent"
                                />

                                <path
                                    ref={pupilRef}
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M100.631 91.2631C121.415 91.2631 138.263 74.4151 138.263 53.6314C138.263 32.8482 121.415 16 100.631 16C79.8481 16 63 32.8482 63 53.6314C63 74.4151 79.8481 91.2631 100.631 91.2631Z"
                                    className="fill-background"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="sm:w-[45%] py-8 sm:edge-padding-l flex flex-col justify-between">
                        <div className="hidden sm:flex mb-12 w-28 h-28 rounded-full border items-center justify-center"></div>

                        <p className="w-full font-paragraph text-muted-foreground sm:text-foreground text-center sm:text-left">
                            Hi, I'm Rasul. A seasoned web artisan with 5+ years
                            of experience crafting stunning websites that
                            deliver exceptional user experiences.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
