import { MarqueeTextSection } from '@/components/MarqueeTextSection'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { InfoSubSection } from './InfoSubSection'

export const AboutSection = () => {
    return (
        <section className="flex flex-col">
            <MarqueeTextSection text="ABOUT ME •" />

            <div className="container">
                <div className="flex flex-nowrap items-center justify-between space-x-8 px-8">
                    {/* img */}
                    <div className="py-8">
                        <div className="w-[500px] h-[500px] bg-foreground/5 rounded-tl-full rounded-tr-full flex items-center justify-center">
                            <span className="text-muted-foreground">
                                todo: professional image
                            </span>
                        </div>
                    </div>

                    <div className="max-w-lg flex flex-col py-16 px-8 space-y-8">
                        <InfoSubSection title="Professional">
                            I'm a self-taught & self-motivated full-stack web
                            developer with over 5 years experience. Currently
                            I'm freelancing by helping small to medium scale
                            enterprises and individual entrepreneurs develop
                            software solutions in line with the industry's best
                            practices. You can find me on popular freelance
                            platforms such as{' '}
                            <Button
                                variant="link"
                                asChild
                                className="text-base"
                            >
                                <a
                                    href="https://www.upwork.com/freelancers/~016e4171185bc6ec63"
                                    target="_blank"
                                >
                                    Upwork
                                </a>
                            </Button>{' '}
                            and{' '}
                            <Button
                                variant="link"
                                asChild
                                className="text-base"
                            >
                                <a
                                    href="https://www.fiverr.com/itsrasul"
                                    target="_blank"
                                >
                                    Fiverr
                                </a>
                            </Button>
                            .
                        </InfoSubSection>

                        <Separator />

                        <InfoSubSection title="Personal">
                            In my free time you will probably find me working
                            out, hitting the drums, meditating or spending time
                            with my family.
                        </InfoSubSection>

                        <Separator />

                        <InfoSubSection title="Services">
                            I focus on building professional, responsive and
                            SEO-optimized websites. These include, but not
                            limited to landing pages, e-commerce shops,
                            portfolios or personal sites and CRM/CMS systems.
                        </InfoSubSection>
                    </div>
                </div>
            </div>
        </section>
    )
}
