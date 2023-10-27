'use client'

import { AboutSection } from '@/components/homepage/sections/AboutSection'
import { HeroSection } from '@/components/homepage/sections/HeroSection'
import { ProjectsSection } from '@/components/homepage/sections/ProjectsSection'
import { ReactLenis } from '@studio-freight/react-lenis'

export default function Home() {
    return (
        <ReactLenis root>
            <main className="flex flex-col min-h-screen relative z-10 mb-[100vh]">
                <HeroSection />

                <ProjectsSection />

                <AboutSection />

                {/* add faq section */}
            </main>
        </ReactLenis>
    )
}
