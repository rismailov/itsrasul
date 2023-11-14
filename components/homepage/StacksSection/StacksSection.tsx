import { STACKS, StackSprite } from './sprites/StackSprite'

export const StacksSection = () => {
    return (
        <section className="grid grid-cols-2 border-b">
            <div className="p-8 flex flex-col">
                <h1 className="text-2xl uppercase text-accent-foreground">
                    MY STACK
                </h1>

                <h1 className="text-2xl uppercase">
                    programming languages & technologies i use to build websites
                </h1>
            </div>

            {/* stacks */}
            <div className="flex flex-col border-l">
                {/* frontend */}
                <div className="flex items-center justify-between p-8 border-b">
                    <h1 className="text-2xl uppercase">frontend</h1>

                    <ul className="flex space-x-5 [&>li>svg]:w-7 [&>li>svg]:h-7">
                        <li>
                            <StackSprite stack={STACKS.react} />
                        </li>
                        <li>
                            <StackSprite stack={STACKS.typescript} />
                        </li>
                        <li>
                            <StackSprite stack={STACKS.tailwind} />
                        </li>
                        <li>
                            <StackSprite stack={STACKS.gsap} />
                        </li>
                        <li>
                            <StackSprite stack={STACKS.next} />
                        </li>
                    </ul>
                </div>

                {/* backend */}
                <div className="flex items-center justify-between p-8">
                    <h1 className="text-2xl uppercase">backend</h1>

                    <ul className="flex space-x-5 [&>li>svg]:w-7 [&>li>svg]:h-7">
                        <li>
                            <StackSprite stack={STACKS.php} />
                        </li>
                        <li>
                            <StackSprite stack={STACKS.laravel} />
                        </li>
                        <li>
                            <StackSprite stack={STACKS.inertia} />
                        </li>
                        <li>
                            <StackSprite stack={STACKS.postgres} />
                        </li>
                        <li>
                            <StackSprite stack={STACKS.mysql} />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
