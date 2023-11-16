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
                    end: `+=${contentWrapperHeight - svgHeight / 1.7 - offset}`,
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
            id="work"
            ref={sectionRef}
            className="relative flex flex-col pb-8 md:pb-16 border-b"
        >
            {/* title */}
            <MarqueeTextSection text="RECENT WORK •" />

            {/* subheader */}
            <div className="container mt-4">
                <div className="flex justify-between text-muted-foreground">
                    <p className="w-full text-center md:text-left md:w-[13rem] text-sm uppercase">
                        Some of the projects I had the pleasure to work on
                    </p>

                    <p className="hidden w-[13rem] pl-4 md:flex justify-center text-sm uppercase">
                        e-commerce /
                        <br />
                        business
                    </p>

                    <p className="hidden w-[13rem] md:flex justify-end text-sm uppercase">
                        5/9
                        <br />
                        41
                    </p>
                </div>
            </div>

            {/* content */}
            <div className="container mt-4 md:mt-20">
                <div
                    id="contentWrapper"
                    className="flex flex-col sm:flex-row justify-between"
                >
                    {/* left side: animated svg that will convert the background colour */}
                    <div className="hidden md:block mr-12 lg:mr-16">
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
                            url="https://shoescommerce.itsrasul.dev/"
                            number={1}
                        />

                        <Project
                            category="Business Landing"
                            title="Digit UX"
                            url="https://digit-ux.vercel.app/"
                            number={2}
                        />

                        <Project
                            category="Portfolio"
                            title="ITS RASUL"
                            url="https://itsrasul.dev"
                            number={3}
                        />

                        <Project
                            category="Admin Dashboard"
                            title="CRM - CMS"
                            url="#"
                            number={4}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
