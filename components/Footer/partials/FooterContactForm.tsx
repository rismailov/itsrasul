'use client'

import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Label } from '../../ui/label'
import { Textarea } from '../../ui/textarea'

export const FooterContactForm = () => {
    return (
        <div className="grid grid-cols-2 gap-8">
            {/* left side */}
            <div className="flex justify-between space-x-8">
                <div className="flex flex-col justify-between">
                    <div className="flex-1">
                        <h3 className="text-3xl leading-normal font-medium font-heading text-foreground">
                            Have a project in mind?
                        </h3>

                        <p className="mt-1 text-lg max-w-md text-muted-foreground">
                            Fill out the form and I will reach out to you as
                            soon as possible.
                        </p>
                    </div>

                    <div className="flex items-center justify-between text-lg">
                        <p className="text-muted-foreground">
                            Would rather send an e-mail?{' '}
                            <a
                                href="mailto:hello@itsrasul.dev"
                                className="text-accent-foreground link"
                            >
                                hello@itsrasul.dev
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* right side */}
            <form action="">
                <div className="max-w-lg flex flex-col space-y-5">
                    {/* name */}
                    <div className="flex flex-col space-y-2">
                        <Label>Name</Label>

                        <Input placeholder="John Doe" />
                    </div>

                    {/* email */}
                    <div className="flex flex-col space-y-2">
                        <Label>E-mail</Label>

                        <Input type="email" placeholder="johndoe@gmail.com" />
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
                        size="lg"
                        variant="secondary"
                        className="text-black bg-accent hover:bg-accent-hover h-10 self-start uppercase font-bold"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}
