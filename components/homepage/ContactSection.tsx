import { MarqueeTextSection } from '@/components/MarqueeTextSection'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import chapelle from '@/public/chapelle.gif'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

// need className prop to show/hide element based on viewport width
const EmailCta = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={clsx('font-paragraph', className)}>
            <span className="text-muted-foreground">
                Would rather send an e-mail?{' '}
            </span>

            <Button variant="link" asChild className="text-base">
                <a href="mailto:hello@itsrasul.dev">hello@itsrasul.dev</a>
            </Button>
        </div>
    )
}

export const ContactSection = () => {
    return (
        <section id="contact" className="border-y">
            <MarqueeTextSection text="LET'S CONNECT! •" />

            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-[55%_45%] py-16">
                    {/* left side */}
                    <div className="flex justify-between md:space-x-8">
                        <div className="w-full flex flex-col justify-between">
                            <div className="flex-1">
                                <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 items-center space-x-5">
                                    <div className="w-24">
                                        <AspectRatio ratio={4 / 3}>
                                            <Image
                                                alt="Chapelle"
                                                src={chapelle}
                                                className="w-full h-full rounded-lg object-center object-cover"
                                            />
                                        </AspectRatio>
                                    </div>

                                    <div>
                                        <h3 className="md:text-lg text-center md:text-left leading-normal font-heading text-foreground uppercase font-medium">
                                            Have a project in mind?
                                        </h3>

                                        <p className="text-sm lg:text-base text-center md:text-left max-w-xs text-muted-foreground font-paragraph">
                                            Fill out the form and I will reach
                                            out to you as soon as possible.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <EmailCta className="hidden md:block" />
                        </div>
                    </div>

                    {/* right side */}
                    <div className="pt-12 md:pt-0 md:pl-8 max-w-md md:max-w-none mx-auto md:mx-0 w-full md:w-auto">
                        <form action="">
                            <div className="flex flex-col space-y-5">
                                {/* name */}
                                <div className="flex flex-col space-y-2">
                                    <Label>Name</Label>

                                    <Input placeholder="John Doe" />
                                </div>

                                {/* email */}
                                <div className="flex flex-col space-y-2">
                                    <Label>E-mail</Label>

                                    <Input
                                        type="email"
                                        placeholder="johndoe@gmail.com"
                                    />
                                </div>

                                {/* message */}
                                <div className="flex flex-col space-y-2">
                                    <Label>Message</Label>

                                    <Textarea
                                        rows={5}
                                        placeholder="The people who are crazy enough to think they can change the world are the ones who do."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="secondary"
                                    className="w-full lg:w-auto bg-foreground text-background hover:bg-foreground/80 dark:text-black dark:bg-accent dark:hover:bg-accent-hover self-start uppercase font-medium text-sm px-6"
                                >
                                    Send
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
