import clsx from 'clsx'
import { PropsWithChildren, ReactNode, forwardRef } from 'react'

type TProps = PropsWithChildren<{
    sectionId: string
    preTitle: string
    title: string
    rightSide?: ReactNode
    contentClassname?: string
    headerClassName?: string
    wrapperClassName?: string
}>

export const SectionLayout = forwardRef<HTMLDivElement, TProps>(
    (
        {
            sectionId,
            preTitle,
            title,
            rightSide,
            contentClassname,
            headerClassName,
            wrapperClassName,
            children,
        },
        ref,
    ) => {
        return (
            <div className="container py-10 border-x border-b">
                <section
                    ref={ref}
                    id={sectionId}
                    className={clsx(
                        'flex flex-col space-y-5',
                        wrapperClassName,
                    )}
                >
                    {/* header */}
                    <div
                        className={clsx(
                            'flex items-center justify-between',
                            headerClassName,
                        )}
                    >
                        {/* title */}
                        <h1 className="text-3xl">{title}</h1>

                        {rightSide && rightSide}
                    </div>

                    {/* content */}
                    <div className={contentClassname}>{children}</div>
                </section>
            </div>
        )
    },
)
