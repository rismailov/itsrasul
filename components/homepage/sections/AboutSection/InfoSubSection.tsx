import { Separator } from '@/components/ui/separator'
import { PropsWithChildren } from 'react'

export const InfoSubSection = ({
    title,
    children,
}: PropsWithChildren<{ title: string }>) => {
    return (
        <div>
            <Separator />

            <section className="py-5 flex items-start justify-between text-lg">
                <h3 className="font-medium font-heading text-muted-foreground">
                    {title}
                </h3>

                <div className="w-full max-w-xl text-foreground/70 dark:text-muted-foreground">
                    {children}
                </div>
            </section>
        </div>
    )
}
