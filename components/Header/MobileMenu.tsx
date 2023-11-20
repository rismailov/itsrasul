import { Button } from '@/components/ui/button'
import useUpdateEffect from '@/hooks/use-update-effect'
import { sleep } from '@/lib/utils'
import { useLenis } from '@studio-freight/react-lenis'
import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { SocialLinks } from './SocialLinks'

export const MobileMenu = ({
    closeMobileMenu,
    isMobileMenuOpen,
}: {
    closeMobileMenu: () => void
    isMobileMenuOpen: boolean
}) => {
    const lenis = useLenis()

    // Scroll to section on nav button click
    async function scrollToSection(sectionID: string) {
        closeMobileMenu()

        await sleep(300)

        lenis.scrollTo(`#${sectionID}`, { duration: 1.5 })
    }

    /** Animation */
    const rootRef = useRef<HTMLDivElement>(null)
    const tlRef = useRef<GSAPTimeline>(
        gsap.timeline({
            paused: true,
            reversed: true,
            defaults: {
                ease: 'power2.inOut',
            },
        }),
    )

    // Set initial values
    useLayoutEffect(() => {
        if (!rootRef.current) {
            return
        }

        const ctx = gsap.context(() => {
            gsap.set(rootRef.current, {
                yPercent: -100,
                // Opacity was set to 0 in CSS to hide element until page is fully loaded.
                // It's not a part of the animation, only a workaround.
                opacity: 1,
            })

            const root = rootRef.current!

            const nav = root.querySelector('#mobileMenuTop') as HTMLElement
            const footer = root.querySelector(
                '#mobileMenuBottom',
            ) as HTMLElement

            gsap.set([nav.children, footer.children], {
                autoAlpha: 0,
                x: 15,
            })
        }, [rootRef])

        return () => ctx.revert()
    }, [])

    // Animate menu on state change
    // note: using custom useUpdateEffect hook here so that animations
    // won't kick in on first render
    useUpdateEffect(() => {
        if (!rootRef.current) {
            return
        }

        const ctx = gsap.context(() => {
            const root = rootRef.current!
            const tl = tlRef.current

            const nav = root.querySelector('#mobileMenuTop') as HTMLElement
            const footer = root.querySelector(
                '#mobileMenuBottom',
            ) as HTMLElement

            // enter (show) animation
            tl.to(rootRef.current, {
                yPercent: 0,
                duration: 0.5,
            }).to(
                [nav.children, footer.children],
                {
                    x: 0,
                    autoAlpha: 1,
                    stagger: 0.1,
                    duration: 0.6,
                },
                '-=0.25',
            )

            tl.reversed() ? tl.play() : tl.reverse()
        }, [rootRef])

        return () => ctx.revert()
    }, [isMobileMenuOpen])

    return (
        <div
            ref={rootRef}
            className="md:hidden opacity-0 absolute z-20 top-14 left-0 right-0 flex flex-col justify-between p-8 bg-background h-[50vh] border-b"
        >
            <nav
                id="mobileMenuTop"
                className="flex flex-col items-start space-y-4"
            >
                <button onClick={() => scrollToSection('work')}>WORK</button>

                <button onClick={() => scrollToSection('about')}>ABOUT</button>

                <button onClick={() => scrollToSection('contact')}>
                    CONTACT
                </button>
            </nav>

            <div
                id="mobileMenuBottom"
                className="mobile-menu__footer flex items-center justify-between"
            >
                <SocialLinks />

                <Button
                    onClick={() => scrollToSection('contact')}
                    className="uppercase rounded-full dark:bg-accent dark:hover:bg-accent-hover text-xs font-semibold h-8 px-5"
                >
                    Let's Talk
                </Button>
            </div>
        </div>
    )
}
