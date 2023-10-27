import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { FooterNavSection } from './FooterNavSection'
import { SocialLinks } from './FooterNavSection/SocialLinks'

export const FooterNav = () => {
    const lenis = useLenis()

    function scrollToSection(sectionID: string) {
        const section = document.querySelector(sectionID)

        section && lenis.scrollTo(section as HTMLElement)
    }

    return (
        <nav className="flex-1 grid grid-cols-4 gap-5 text-foreground">
            {/* TODO: scroll to sections */}
            <FooterNavSection title="Discover">
                <button
                    className="link"
                    onClick={() => scrollToSection('#hero')}
                >
                    Homepage
                </button>
                <button
                    className="link"
                    onClick={() => scrollToSection('#projects')}
                >
                    Recent Projects
                </button>
                <button
                    className="link"
                    onClick={() => scrollToSection('#about')}
                >
                    About Me
                </button>
                <button className="link">F.A.Q.</button>
            </FooterNavSection>

            <FooterNavSection title="Freelance Profiles">
                <a
                    href="https://www.upwork.com/freelancers/~016e4171185bc6ec63"
                    target="_blank"
                    className="link"
                >
                    Upwork
                </a>
                <a
                    href="https://www.fiverr.com/itsrasul"
                    target="_blank"
                    className="link"
                >
                    Fiverr
                </a>
            </FooterNavSection>

            <FooterNavSection title="General Inqueries">
                <a
                    href="mailto:hello@itsrasul.dev"
                    target="_blank"
                    className="link"
                >
                    hello@itsrasul.dev
                </a>

                <a href="tel:+994554206662" target="_blank" className="link">
                    +994 55 420 66 62
                </a>
            </FooterNavSection>

            <FooterNavSection title="Social Links">
                <SocialLinks />
            </FooterNavSection>
        </nav>
    )
}
