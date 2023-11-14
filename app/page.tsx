'use client'

import { SocialLinks } from '@/components/Header/SocialLinks'
import { AboutSection } from '@/components/homepage/sections/AboutSection'
import { ContactSection } from '@/components/homepage/sections/ContactSection'
import { HeroSection } from '@/components/homepage/sections/HeroSection'
import { ProjectsSection } from '@/components/homepage/sections/ProjectsSection'
import { useRef } from 'react'

export default function Home() {
    const mainRef = useRef<HTMLDivElement>(null)

    return (
        <main
            ref={mainRef}
            className="flex flex-col min-h-screen relative z-10"
        >
            <HeroSection />

            <ProjectsSection />

            <AboutSection />

            <ContactSection />
        </main>
    )
}
