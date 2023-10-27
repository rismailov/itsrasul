'use client'

import { AboutSection } from '@/components/homepage/sections/AboutSection'
import { HeroSection } from '@/components/homepage/sections/HeroSection'
import { ProjectsSection } from '@/components/homepage/sections/ProjectsSection'

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen relative">
            <HeroSection />

            <ProjectsSection />

            <AboutSection />

            {/* add faq section */}
        </main>
    )
}
