import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { sleep } from '@/lib/utils'
import clsx from 'clsx'
import { FormEvent, useState } from 'react'
import z from 'zod'
import { useToast } from '../../ui/use-toast'

// makes each field nullable (for form errors)
export type PartialNull<T> = {
    [P in keyof T]: T[P] | null
}

export const ContactForm = () => {
    // toast
    const { toast } = useToast()

    // form submission loading state
    const [isLoading, setIsLoading] = useState(false)

    // zod validation schema
    const schema = z.object({
        name: z
            .string({ required_error: 'Name is required' })
            .min(3, { message: 'Name must contain at least 3 characters' })
            .max(20, {
                message: 'Name can contain at most 20 characters',
            }),
        email: z
            .string({ required_error: 'E-mail is required' })
            .email({ message: 'Invalid e-mail address' }),
        message: z
            .string({ required_error: 'Message is required' })
            .min(3, { message: 'Message must contain at least 3 characters' })
            .max(300, {
                message: 'Message can contain at most 300 characters',
            }),
    })

    const [formData, setFormData] = useState<z.infer<typeof schema>>({
        name: '',
        email: '',
        message: '',
    })

    const [formErrors, setFormErrors] = useState<
        PartialNull<z.infer<typeof schema>>
    >({
        name: null,
        email: null,
        message: null,
    })

    const onChange = (key: keyof z.infer<typeof schema>, value: string) => {
        // update value
        setFormData((prev) => ({ ...prev, [key]: value }))

        // reset error
        if (formErrors[key] !== null) {
            setFormErrors((prev) => ({ ...prev, [key]: null }))
        }
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setIsLoading(true)

        // validate
        const result = schema.safeParse(formData)

        if (!result.success) {
            // set error messages
            result.error.issues.forEach((issue) => {
                const key = issue.path[0]

                setFormErrors((prev) => ({
                    ...prev,
                    [key]: issue.message,
                }))
            })

            setIsLoading(false)

            return
        }

        // send message to telegram channel
        const url = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify({
                chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHANNEL_CHAT_ID,
                text: `New message from ${formData.name} (${formData.email}): ${formData.message}`,
            }),
        })

        const { ok } = await response.json()

        if (!ok) {
            setIsLoading(false)

            return toast({
                description:
                    "Oops! Couldn't send a message. Please shoot me an e-mail instead.",
            })
        }

        // sleep for animation
        await sleep(300)

        // show success
        toast({
            description:
                'Thank you for your message. I will reach out to you as soon as I can.',
        })

        setIsLoading(false)

        // reset fields
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <form
            onSubmit={onSubmit}
            className={clsx(isLoading && 'opacity-50 pointer-events-none')}
        >
            <div className="flex flex-col space-y-5">
                {/* name */}
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="name">Name</Label>

                    <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => onChange('name', e.target.value)}
                        placeholder="John Doe"
                    />

                    {formErrors.name && (
                        <p className="error">{formErrors.name}</p>
                    )}
                </div>

                {/* email */}
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="email">E-mail</Label>

                    <Input
                        id="email"
                        value={formData.email}
                        onChange={(e) => onChange('email', e.target.value)}
                        type="email"
                        placeholder="johndoe@gmail.com"
                    />

                    {formErrors.email && (
                        <p className="error">{formErrors.email}</p>
                    )}
                </div>

                {/* message */}
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="message">Message</Label>

                    <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => onChange('message', e.target.value)}
                        rows={5}
                        placeholder="The people who are crazy enough to think they can change the world are the ones who do."
                    />

                    {formErrors.message && (
                        <p className="error">{formErrors.message}</p>
                    )}
                </div>

                <Button
                    type="submit"
                    variant="secondary"
                    className="w-full lg:w-auto bg-foreground text-background hover:bg-foreground/80 dark:text-black dark:bg-accent dark:hover:bg-accent-hover self-start uppercase font-medium text-sm px-6"
                >
                    {isLoading ? 'Sending...' : 'Send'}
                </Button>
            </div>
        </form>
    )
}
