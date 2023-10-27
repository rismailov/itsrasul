'use client'

import { IconMoon, IconSun } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { OnlyClient } from '../OnlyClient'

const iconVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
}

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()

    return (
        <OnlyClient>
            <button
                className="relative w-[19px] h-[19px] mr-2"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                <AnimatePresence initial={false} mode="popLayout">
                    {theme === 'dark' && (
                        <motion.div
                            className="absolute inset-0"
                            key={theme}
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{
                                ease: 'backOut',
                                duration: 0.5,
                            }}
                        >
                            <IconSun className="w-full h-full" />
                        </motion.div>
                    )}

                    {theme !== 'dark' && (
                        <motion.div
                            className="absolute inset-0"
                            key={theme}
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{
                                ease: 'backOut',
                                duration: 0.5,
                            }}
                        >
                            <IconMoon className="w-full h-full" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </OnlyClient>
    )
}
