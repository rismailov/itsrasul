import { MarqueeTextSection } from '@/components/MarqueeTextSection'
import { useGsapContext } from '@/context/gsap-provider'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import { Project } from './Project'

export const ProjectsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const svgRef = useRef(null)

    const ctx = useGsapContext(sectionRef)

    // rotate svg
    useLayoutEffect(() => {
        if (sectionRef.current && svgRef.current) {
            ctx.add(() => {
                gsap.registerPlugin(ScrollTrigger)

                /** ROTATION ANIMATION BY DEFAULT */
                const t = gsap.to(svgRef.current, {
                    rotation: 360,
                    duration: 15,
                    ease: 'none',
                    repeat: -1,
                })

                t.iteration(1000)

                /** ROTATE SVG ON SCROLL (DIRECTION AWARE) */
                const speedFactor = 3
                let tl: GSAPTimeline

                gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        onUpdate: (self) => {
                            tl && tl.kill()
                            tl = gsap
                                .timeline()
                                .to(t, {
                                    timeScale: speedFactor * self.direction,
                                    duration: 0.1,
                                })
                                .to(
                                    t,
                                    { timeScale: self.direction, duration: 1 },
                                    '+=0.5',
                                )
                        },
                    },
                })

                /** PIN THE ROTATING SVG */
                // get distance to scroll
                const offset = 100
                const svgHeight = 200
                const { height: contentWrapperHeight } = sectionRef
                    .current!.querySelector('#contentWrapper')!
                    .getBoundingClientRect()

                ScrollTrigger.create({
                    trigger: svgRef.current,
                    start: `-=${offset}`,
                    end: `+=${contentWrapperHeight - svgHeight - offset * 1.5}`,
                    pin: true,
                    scrub: true,
                })
            }, [sectionRef])

            // clean-up
            return () => ctx && ctx.revert()
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative flex flex-col pb-16 border-b"
        >
            {/* title */}
            <MarqueeTextSection text="RECENT WORK •" />

            {/* subheader */}
            <div className="container mt-4">
                <div className="px-8 flex justify-between text-muted-foreground">
                    <h3 className="w-[13rem] text-sm uppercase">
                        Some of the projects I had the pleasure to work on
                    </h3>

                    <h3 className="w-[13rem] pl-4 flex justify-center text-sm uppercase">
                        e-commerce /
                        <br />
                        business
                    </h3>

                    <h3 className="w-[13rem] flex justify-end text-sm uppercase">
                        5/9
                        <br />
                        41
                    </h3>
                </div>
            </div>

            {/* content */}
            <div className="container mt-24">
                <div id="contentWrapper" className="flex justify-between px-8">
                    {/* left side: animated svg that will convert the background colour */}
                    <div className="mr-16">
                        <svg
                            ref={svgRef}
                            width="200"
                            height="200"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-foreground"
                        >
                            <g
                                fillRule="evenodd"
                                clipPath="url(#a)"
                                clipRule="evenodd"
                            >
                                <path d="M107.143 0H92.857v82.756L34.34 24.239 24.24 34.34l58.517 58.517H0v14.286h82.755L24.24 165.66l10.101 10.101 58.517-58.517V200h14.286v-82.756l58.517 58.517 10.101-10.101-58.517-58.517H200V92.857h-82.756l58.517-58.517-10.101-10.102-58.517 58.517V0Z" />
                            </g>
                        </svg>
                    </div>

                    {/* right side: projects list */}
                    <div className="w-full max-w-2xl flex flex-col">
                        <Project
                            category="E-commerce Shop"
                            title="Nike Shoes"
                            number={1}
                        />

                        <Project
                            category="Business Landing"
                            title="Digit UX"
                            number={2}
                        />

                        <Project
                            category="Portfolio"
                            title="ITS RASUL"
                            number={3}
                        />

                        <Project
                            category="Admin Dashboard"
                            title="CRM - CMS"
                            number={4}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
