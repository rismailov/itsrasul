import { MarqueeTextSection } from '@/components/MarqueeTextSection'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { InfoSubSection } from './InfoSubSection'
import { STACKS, StackSprite } from './StackSprite'

export const AboutSection = () => {
    return (
        <section id="about" className="flex flex-col">
            <MarqueeTextSection text="ABOUT ME •" />

            <div className="container">
                <div className="flex flex-col lg:flex-row lg:flex-nowrap justify-between space-y-16 lg:space-x-24 lg:space-y-0 py-12 md:py-16">
                    {/* img */}
                    <div className="flex items-center justify-center lg:block">
                        <div className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] bg-foreground/5 rounded-tl-full rounded-tr-full flex items-center justify-center">
                            <span className="text-foreground text-center">
                                todo:
                                <br />
                                professional image
                            </span>
                        </div>
                    </div>

                    <div className="max-w-md mx-auto lg:mx-0 lg:max-w-lg flex flex-col space-y-8">
                        <InfoSubSection title="Professional">
                            <p className="text-center lg:text-start">
                                Currently I'm freelancing by helping small to
                                medium scale enterprises and individual
                                entrepreneurs develop software solutions in line
                                with the industry's best practices. You can find
                                me on popular freelance platforms such as{' '}
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
                            </p>
                        </InfoSubSection>

                        <Separator />

                        <InfoSubSection title="Stack">
                            <div className="flex flex-col space-y-5">
                                <p className="text-center lg:text-start">
                                    In my free time I like to tinker with
                                    various programming languages including
                                    Python, Golang, and Rust, just to name a
                                    few. But my main expertise lies in web
                                    development and here are some of the
                                    programming languages and technologies I use
                                    daily in my work:
                                </p>

                                <div className="space-y-2">
                                    <div
                                        className="flex flex-wrap justify-center items-center md:grid md:gap-5 [&>svg]:w-6 [&>svg]:h-6 [&>svg]:m-2 md:[&>svg]:m-0"
                                        style={{
                                            gridTemplateColumns:
                                                'repeat(auto-fill, minmax(30px, 1fr))',
                                        }}
                                    >
                                        <StackSprite stack={STACKS.react} />
                                        <StackSprite
                                            stack={STACKS.typescript}
                                        />
                                        <StackSprite stack={STACKS.next} />
                                        <StackSprite stack={STACKS.gsap} />
                                        <StackSprite stack={STACKS.tailwind} />
                                        <StackSprite stack={STACKS.php} />
                                        <StackSprite stack={STACKS.laravel} />
                                        <StackSprite stack={STACKS.mysql} />
                                        <StackSprite stack={STACKS.postgres} />
                                        <StackSprite stack={STACKS.inertia} />
                                    </div>
                                </div>
                            </div>
                        </InfoSubSection>

                        <Separator />

                        <InfoSubSection title="Services">
                            <p className="text-center lg:text-start">
                                I focus on building professional, responsive and
                                SEO-optimized websites. These include, but not
                                limited to landing pages, e-commerce shops,
                                portfolios or personal sites and CRM/CMS
                                systems.
                            </p>
                        </InfoSubSection>

                        <Separator />

                        <InfoSubSection title="Personal">
                            <p className="text-center lg:text-start">
                                In my free time you will probably find me
                                working out, hitting the drums, meditating or
                                spending time with my family.
                            </p>
                        </InfoSubSection>
                    </div>
                </div>
            </div>
        </section>
    )
}
