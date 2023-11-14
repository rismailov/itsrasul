import { PropsWithChildren } from 'react'

export const InfoSubSection = ({
    title,
    children,
}: PropsWithChildren<{ title: string }>) => {
    return (
        <div className="flex flex-col space-y-2">
            {/* badge */}
            <div className="uppercase text-xs font-medium rounded-full border-[1.5px] border-accent text-accent py-1 px-3 self-start -ml-1">
                {title}
            </div>

            <p className="font-paragraph">{children}</p>
        </div>
    )
}
