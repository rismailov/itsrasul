import { AnimatedTextOnSroll } from '../../AnimatedTextOnSroll'
import { Project } from './Project'
import { STACKS } from './sprites/StackSprite'

export const ProjectsSection = () => {
    return (
        <section id="projects" className="dark pt-20 pb-24 bg-black">
            <div className="container">
                {/* pre-title */}
                <p className="text-muted-foreground text-lg leading-none">
                    some of my
                </p>

                {/* title */}
                <AnimatedTextOnSroll
                    text="Recent projects"
                    className="font-heading text-[4vw] text-foreground"
                />

                {/* projects */}
                <div className="mt-20 flex flex-col items-stretch">
                    <Project
                        title="Shoes E-commerce"
                        url="https://shoescommerce.itsrasul.dev/"
                        stacks={[
                            STACKS.react,
                            STACKS.typescript,
                            STACKS.tailwind,
                            STACKS.postgres,
                            STACKS.php,
                            STACKS.laravel,
                            STACKS.inertia,
                        ]}
                    />

                    <Project
                        title="DigitUX Agency"
                        url="https://digit-ux.vercel.app/"
                        stacks={[
                            STACKS.react,
                            STACKS.typescript,
                            STACKS.tailwind,
                            STACKS.next,
                        ]}
                    />

                    <Project
                        title="CRM Dashboard"
                        url="#"
                        stacks={[
                            STACKS.react,
                            STACKS.typescript,
                            STACKS.tailwind,
                            STACKS.mysql,
                            STACKS.php,
                            STACKS.laravel,
                            STACKS.inertia,
                        ]}
                    />

                    <Project
                        title="Portfolio"
                        url="https://itsrasul.dev"
                        stacks={[
                            STACKS.react,
                            STACKS.typescript,
                            STACKS.tailwind,
                            STACKS.next,
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}
