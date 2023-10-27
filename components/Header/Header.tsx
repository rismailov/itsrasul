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
        <header className="h-[80px] bg-background dark:bg-secondary">
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
                    </div>
                </div>
            </div>
        </header>
    )
}
