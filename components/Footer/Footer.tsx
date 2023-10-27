'use client'

import { AnimatedTextOnSroll } from '../homepage/AnimatedTextOnSroll'
import { Separator } from '../ui/separator'
import { FooterContactForm } from './partials/FooterContactForm'
import { FooterNav } from './partials/FooterNav'

export const Footer = () => {
    return (
        <footer className="dark w-full pt-20 pb-12 flex items-center justify-center">
            <div className="container">
                <div className="h-full flex flex-col space-y-10">
                    <div className="w-full">
                        <AnimatedTextOnSroll
                            text="Let's connect!"
                            className="text-[6vw] font-heading text-muted-foreground"
                        />
                    </div>

                    <Separator />

                    <FooterContactForm />

                    <Separator />

                    <FooterNav />

                    <Separator />

                    <div>
                        <p className="text-muted-foreground text-lg">
                            &copy; 2023. Rasul Ismailov. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
