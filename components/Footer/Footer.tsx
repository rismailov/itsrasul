'use client'

import chapelle from '@/public/chapelle.gif'
import Image from 'next/image'
import { AnimatedTextOnSroll } from '../homepage/AnimatedTextOnSroll'
import { ContactForm } from './ContactForm'

export const Footer = () => {
    return (
        <footer className="dark fixed z-[1] bottom-0 left-0 right-0 w-full h-screen py-10 flex items-center justify-center">
            <div className="container">
                <div className="h-full grid grid-cols-2 gap-5">
                    {/* LEFT SIDE */}
                    <div className="flex-1 mt-10 h-full flex text-muted-foreground">
                        {/* FORM SECTION */}
                        <div className="flex flex-col space-y-3">
                            {/* FORM HEADER */}
                            <div>
                                <Image
                                    alt="Got some projects?"
                                    src={chapelle}
                                    className="w-[100px] h-[100px] object-center object-cover rounded-lg"
                                />

                                <h3 className="text-2xl leading-normal font-medium font-heading text-foreground">
                                    Have a project in mind?
                                </h3>

                                <p className="text-lg">
                                    Fill out the form below and I will reach out
                                    to you as soon as I can.
                                </p>
                            </div>

                            <ContactForm />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <AnimatedTextOnSroll
                            text="Let's connect!"
                            className="text-[5vw] text-right font-bold font-heading text-foreground"
                            isFooter
                        />

                        {/* SOCIAL LINKS */}
                    </div>
                </div>
            </div>
        </footer>
    )
}
