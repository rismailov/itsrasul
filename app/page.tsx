'use client'

import { AboutSection } from '@/components/homepage/AboutSection'
import { ContactSection } from '@/components/homepage/ContactSection'
import { HeroSection } from '@/components/homepage/HeroSection'
import { ProjectsSection } from '@/components/homepage/ProjectsSection'
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
