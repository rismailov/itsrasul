import { PropsWithChildren, useEffect, useState } from 'react'

/**
 * A wrapper component to fight nextjs hydration warnings.
 */
export const OnlyClient = ({ children }: PropsWithChildren) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [setIsMounted])

    return !isMounted ? null : children
}
