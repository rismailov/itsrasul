'use client'

import { SocialLinks } from './SocialLinks'
import { Button } from '../ui/button'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => {
    return (
        <header className="relative z-10 border-b h-16">
            <div className="container">
                <div className="flex h-full">
                    {/* logo section */}
                    <a
                        href="#"
                        className="px-8 border-r flex items-center justify-center"
                    >
                        Rasul Mamedov
                    </a>

                    {/* gap section */}
                    <div className="px-8 border-r flex-1 flex items-center justify-center">
                        <span className="text-foreground/25 whitespace-nowrap">
                            PORTFOLIO V1
                        </span>
                    </div>

                    <div className="px-6 border-r">
                        <SocialLinks />
                    </div>

                    {/* theme switcher */}
                    <div className="px-4 border-r flex items-center justify-center">
                        <ThemeSwitcher />
                    </div>

                    {/* cta button section */}
                    <div className="px-8 flex items-center justify-center">
                        <Button className="uppercase rounded-full dark:bg-accent dark:hover:bg-accent-hover text-xs font-semibold h-8 px-5">
                            Let's Talk
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
