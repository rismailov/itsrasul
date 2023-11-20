'use client'

import { useLenis } from '@studio-freight/react-lenis'
import clsx from 'clsx'
import React, { SetStateAction } from 'react'
import { Button } from '../ui/button'
import { MobileMenu } from './MobileMenu'
import { SocialLinks } from './SocialLinks'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = ({
    isMobileMenuOpen,
    setMobileMenuOpen,
}: {
    isMobileMenuOpen: boolean
    setMobileMenuOpen: React.Dispatch<SetStateAction<boolean>>
}) => {
    const lenis = useLenis()

    return (
        <header className="relative z-30 h-14 md:h-16">
            {/* absolute positioned border that wont get hidden when mobile nav is toggled (unline default css border) */}
            <div className="absolute top-full left-0 right-0 h-px bg-border z-40"></div>

            {/* mobile nav */}
            <MobileMenu
                isMobileMenuOpen={isMobileMenuOpen}
                closeMobileMenu={() => setMobileMenuOpen(false)}
            />

            {/* header content */}
            <div className="container relative z-30 bg-background">
                <div className="flex w-full h-full">
                    {/* logo section */}
                    <div className="edge-padding-r border-r flex items-center justify-center">
                        <a href="https://itsrasul.dev">
                            <span className="hidden md:inline font-paragraph">
                                Rasul Ismayil
                            </span>

                            <svg
                                className="md:hidden mx-1 w-4.5 h-4.5 fill-foreground dark:fill-accent"
                                viewBox="0 0 80 80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="40" cy="40" r="40" />
                            </svg>
                        </a>
                    </div>

                    {/* gap section */}
                    <div className="px-4 lg:px-8 border-r flex-1 flex items-center justify-center">
                        <span className="hidden lg:inline text-foreground/25 whitespace-nowrap">
                            PORTFOLIO V1
                        </span>
                    </div>

                    {/* social links */}
                    <div className="hidden md:block px-4 lg:px-6 border-r">
                        <SocialLinks />
                    </div>

                    {/* theme switcher */}
                    <div className="px-4 spacing-r border-r flex items-center justify-center">
                        <ThemeSwitcher />
                    </div>

                    {/* cta button section */}
                    <div className="edge-padding-l flex items-center justify-center">
                        <Button
                            onClick={() =>
                                lenis.scrollTo('#contact', { duration: 1.5 })
                            }
                            className="hidden md:block uppercase rounded-full dark:bg-accent dark:hover:bg-accent-hover text-xs font-semibold h-8 px-5"
                        >
                            Let's Talk
                        </Button>

                        {/* mobile menu trigger */}
                        <Button
                            size="icon"
                            className="md:hidden relative flex items-center justify-center"
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            aria-label={
                                isMobileMenuOpen
                                    ? 'Close mobile menu'
                                    : 'Open mobile menu'
                            }
                        >
                            <div className="w-4 relative">
                                <span
                                    className={clsx(
                                        'inline-block absolute left-0 h-[1.75px] w-full bg-foreground transform transition duration-400 ease-out-quart rounded',
                                        isMobileMenuOpen
                                            ? 'rotate-45'
                                            : '-translate-y-1.5',
                                    )}
                                ></span>

                                <span
                                    className={clsx(
                                        'inline-block absolute left-0 h-[1.75px] w-2/3 bg-foreground transform transition duration-400 ease-out-quart rounded',
                                        isMobileMenuOpen &&
                                            'opacity-0 translate-x-0.5',
                                    )}
                                ></span>

                                <span
                                    className={clsx(
                                        'inline-block absolute left-0 h-[1.75px] w-full bg-foreground transform transition duration-400 ease-out-quart rounded',
                                        isMobileMenuOpen
                                            ? '-rotate-45'
                                            : 'translate-y-1.5',
                                    )}
                                ></span>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
