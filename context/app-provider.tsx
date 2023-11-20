'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { isInViewport } from '@/lib/utils'
import { useLenis } from '@studio-freight/react-lenis'
import { AnimatePresence, motion } from 'framer-motion'
import { gsap } from 'gsap'
import {
    PropsWithChildren,
    createContext,
    createRef,
    useContext,
    useState,
} from 'react'

// create pupil ref that will be applied in HeroSection.tsx
const pupilRef = createRef<SVGPathElement>()
// context is needed purely for pupilRef
const context = createContext({
    pupilRef,
})

export const useAppContext = () => useContext(context)

export function AppProvider({ children }: PropsWithChildren) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    // track pupil position in the viewport
    // stop animating it if it's no longer in the viewport
    const [isPupilInViewport, setPupilInViewport] = useState(true)

    // update "isInViewport" state on scroll
    useLenis(() => {
        if (!pupilRef.current) {
            return
        }

        const isInView = isInViewport(pupilRef.current)

        setPupilInViewport((prev) => {
            if (isInView === prev) {
                // no rerender!
                // src: https://stackoverflow.com/a/70712897
                return prev
            }

            // console.log('state updated')

            return isInView
        })
    })

    // move the pupil on mouse move
    const movePupil = (e: React.MouseEvent) => {
        if (!pupilRef.current || !isPupilInViewport) {
            return
        }

        const x = -(window.innerWidth / 5 - e.pageX) / 35
        const y = -(window.innerHeight / 2 - e.pageY) / 35

        gsap.to(pupilRef.current, {
            x,
            y,
            duration: 0.2,
        })
    }

    return (
        <div onMouseMove={movePupil}>
            {/* todo: add splash screen */}

            <Header
                isMobileMenuOpen={isMobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            <main className="relative z-10 transition-opacity ease-out-quart duration-300">
                {/* main content layer to better highligh mobile menu */}
                {/* todo: switch from framer to gsap */}
                <AnimatePresence initial={false} mode="wait">
                    {isMobileMenuOpen && (
                        <motion.div
                            key="layer"
                            onClick={() => setMobileMenuOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{
                                opacity: 0,
                                transition: { delay: 1 },
                            }}
                            transition={{ ease: 'easeIn', duration: 0.3 }}
                            className="md:hidden absolute inset-0 w-full h-full bg-foreground/30 dark:bg-background/70 z-20"
                        ></motion.div>
                    )}
                </AnimatePresence>

                {children}
            </main>

            <Footer />
        </div>
    )
}
