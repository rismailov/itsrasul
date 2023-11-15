import { PropsWithChildren } from 'react'

export const InfoSubSection = ({
    title,
    children,
}: PropsWithChildren<{ title: string }>) => {
    return (
        <div className="flex flex-col items-center lg:items-start space-y-2">
            {/* badge */}
            <div className="uppercase text-xs font-medium rounded-full border-[1.5px] border-accent text-accent py-1 px-3 self-start lg:-ml-1 mx-auto lg:mx-0">
                {title}
            </div>

            <div className="font-paragraph">{children}</div>
        </div>
    )
}
