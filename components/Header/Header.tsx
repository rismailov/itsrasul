'use client'

import { easeOutQuart, sleep } from '@/lib/utils'
import { useLenis } from '@studio-freight/react-lenis'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '../ui/button'
import { SocialLinks } from './SocialLinks'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => {
    const [showMobileNav, setShowMobileNav] = useState(false)

    const lenis = useLenis()

    const onMobileNavLinkClick = async (sectionID: string) => {
        setShowMobileNav(false)

        await sleep(300)

        lenis.scrollTo(`#${sectionID}`, { duration: 1.5 })
    }

    return (
        <header className="relative border-b h-14 md:h-16">
            {/* header content */}
            <div className="container relative z-30 bg-background">
                <div className="flex w-full h-full">
                    {/* logo section */}
                    <div className="edge-padding-r border-r flex items-center justify-center">
                        <a href="https://itsrasul.dev">
                            <span className="hidden md:inline font-paragraph">
                                Rasul Mamedov
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

                        <Button
                            size="icon"
                            onClick={() => setShowMobileNav((prev) => !prev)}
                            className="md:hidden [&>svg]:w-4.5 [&>svg]:h-4.5 [&>svg]:fill-foreground"
                            aria-label={
                                showMobileNav
                                    ? 'Close mobile menu'
                                    : 'Open mobile menu'
                            }
                        >
                            {showMobileNav ? (
                                // close icon
                                <svg
                                    viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926L224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512L166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"
                                    ></path>
                                </svg>
                            ) : (
                                // burger icon
                                <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M3 4h18v2H3V4Zm0 7h12v2H3v-2Zm0 7h18v2H3v-2Z"></path>
                                </svg>
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* mobile nav */}
            <AnimatePresence>
                {showMobileNav && (
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4, ease: easeOutQuart }}
                        className="md:hidden absolute z-20 top-14 left-0 right-0 flex flex-col justify-between p-8 bg-background h-[calc(100vh-56px)] border-b"
                    >
                        <div className="flex flex-col items-start space-y-4">
                            <button
                                onClick={() => onMobileNavLinkClick('work')}
                            >
                                WORK
                            </button>
                            <button
                                onClick={() => onMobileNavLinkClick('about')}
                            >
                                ABOUT
                            </button>
                            <button
                                onClick={() => onMobileNavLinkClick('contact')}
                            >
                                CONTACT
                            </button>
                        </div>

                        <div className="flex items-center justify-between">
                            <SocialLinks />

                            <Button
                                onClick={() => onMobileNavLinkClick('contact')}
                                className="self-start uppercase rounded-full dark:bg-accent dark:hover:bg-accent-hover text-xs font-semibold h-8 px-5"
                            >
                                Let's Talk
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
