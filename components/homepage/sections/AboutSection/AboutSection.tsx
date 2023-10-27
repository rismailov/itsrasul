import me from '@/public/me.webp'
import Image from 'next/image'
import { AnimatedTextOnSroll } from '../../AnimatedTextOnSroll'
import { InfoSubSection } from './InfoSubSection'

export const AboutSection = () => {
    return (
        <section
            id="about"
            className="h-screen py-20 bg-background dark:bg-secondary rounded-tl-3xl rounded-tr-3xl"
        >
            <div className="container">
                {/* header */}
                <div className="flex items-end justify-between">
                    <div>
                        <div className="w-28 h-28 overflow-hidden rounded-full">
                            <Image
                                src={me}
                                alt="Me"
                                className="w-full h-full object-center object-cover grayscale"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        {/* pre-title */}
                        <p className="ml-auto text-muted-foreground text-lg leading-none text-right">
                            a little more info
                        </p>

                        {/* title */}
                        <AnimatedTextOnSroll
                            text="About me"
                            className="ml-auto font-heading text-[4vw] text-foreground text-right leading-tight"
                        />
                    </div>
                </div>

                {/* about */}
                <div className="mt-7">
                    {/* section 1 */}
                    <InfoSubSection title="Professional">
                        <p>
                            I'm a self-taught & self-motivated full-stack web
                            developer with over 5 years experience. Currently
                            I'm freelancing by helping small to medium scale
                            enterprises and individual entrepreneurs develop
                            software solutions in line with the industry's best
                            practices. You can find me on popular freelance
                            platforms such as{' '}
                            <a
                                href="https://www.upwork.com/freelancers/~016e4171185bc6ec63"
                                target="_blank"
                                className="link text-accent"
                            >
                                Upwork
                            </a>{' '}
                            and{' '}
                            <a
                                href="https://www.fiverr.com/itsrasul"
                                target="_blank"
                                className="link text-accent"
                            >
                                Fiverr
                            </a>
                            .
                        </p>
                    </InfoSubSection>

                    {/* section 2 */}
                    <InfoSubSection title="Personal">
                        <p>
                            In my free time you will probably find me working
                            out, hitting the drums, meditating or spending time
                            with my family.
                        </p>
                    </InfoSubSection>

                    {/* section 3 */}
                    <InfoSubSection title="Services">
                        <p>
                            I focus on building professional, responsive and
                            SEO-optimized websites. These include, but not
                            limited to landing pages, e-commerce shops,
                            portfolios or personal sites and CRM/CMS systems.
                        </p>
                    </InfoSubSection>
                </div>
            </div>
        </section>
    )
}
