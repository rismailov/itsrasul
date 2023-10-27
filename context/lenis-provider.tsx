'use client'

import { ReactLenis } from '@studio-freight/react-lenis'
import { PropsWithChildren, useEffect, useRef } from 'react'

export function LenisProvider({ children }: PropsWithChildren) {
    const lenisRef = useRef()

    useEffect(() => {
        // console.log(lenisRef.current?.raf)
        // function update(time) {
        //     lenisRef.current?.raf(time * 1000)
        // }
        // gsap.ticker.add(update)
        // return () => {
        //     gsap.ticker.remove(update)
        // }
    })

    return <ReactLenis ref={lenisRef}>{children}</ReactLenis>
}
