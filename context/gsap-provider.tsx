import gsap from 'gsap'
import { MutableRefObject, useMemo } from 'react'

// https://gsap.com/community/react-advanced/#useGsapContext
export const useGsapContext = (scope: MutableRefObject<HTMLElement | null>) => {
    const ctx = useMemo(() => gsap.context(() => {}, scope), [scope])

    return ctx
}
