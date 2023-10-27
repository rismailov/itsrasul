import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

export const ContactForm = () => {
    return (
        <form action="">
            <div className="flex flex-col space-y-5 mt-5">
                {/* name */}
                <div className="flex flex-col space-y-1">
                    <Label className="text-base text-foreground">Name</Label>

                    <Input placeholder="John Doe" className="text-base " />
                </div>

                {/* email */}
                <div className="flex flex-col space-y-1">
                    <Label className="text-base text-foreground">E-mail</Label>

                    <Input
                        type="email"
                        placeholder="johndoe@gmail.com"
                        className="text-base "
                    />
                </div>

                {/* message */}
                <div className="flex flex-col space-y-1">
                    <Label className="text-base text-foreground">Message</Label>

                    <Textarea
                        rows={5}
                        placeholder="The people who are crazy enough to think they can change the world are the ones who do."
                        className="text-base  resize-none"
                    />
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="text-base bg-white text-black"
                >
                    Send
                </Button>
            </div>
        </form>
    )
}
