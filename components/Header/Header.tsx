'use client'

import { ThemeSwitcher } from './ThemeSwitcher'

const MenuLink = ({ label }: { label: string }) => {
    return (
        <button className="link font-medium" data-hover={label}>
            <span>{label}</span>
        </button>
    )
}

export const Header = () => {
    return (
        <header className="h-[80px] bg-background dark:bg-secondary relative z-10">
            <div className="container py-5">
                <div className="flex items-center justify-between">
                    {/* left side */}
                    {/* logo */}
                    <a href="#" className="font-medium">
                        Rasul{' '}
                        <span className="font-normal text-muted-foreground">
                            Ismailov
                        </span>
                    </a>

                    {/* right side */}
                    <div className="flex items-center space-x-5">
                        <ThemeSwitcher />

                        {/* menu */}
                        <nav className="flex items-center space-x-5">
                            <MenuLink label="Work" />
                            <MenuLink label="About" />
                            <MenuLink label="Let's talk" />
                        </nav>

                        <div className="w-max flex items-center space-x-2.5 py-1 px-3 rounded-full bg-green-600/10 dark:bg-green-400/10 text-foreground">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 dark:bg-green-300 opacity-75"></span>

                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600 dark:bg-green-400"></span>
                            </span>

                            <span className="text-sm font-medium text-green-600 dark:text-green-500">
                                Available for hire
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
