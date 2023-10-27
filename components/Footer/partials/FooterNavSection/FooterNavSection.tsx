import { PropsWithChildren } from 'react'

export const FooterNavSection = ({
    title,
    children,
}: PropsWithChildren<{ title: string }>) => {
    return (
        <div className="flex flex-col space-y-3">
            <p className="text-lg text-muted-foreground">{title}</p>

            <div className="flex flex-col items-start space-y-2 [&>a]:text-xl [&>a]:font-heading [&>a]:font-medium [&>button]:text-xl [&>button]:font-heading [&>button]:font-medium">
                {children}
            </div>
        </div>
    )
}
