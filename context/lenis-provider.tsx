// additional provider for lenis so it can be used in react server component: layout.tsx
'use client'

import { ReactLenis } from '@studio-freight/react-lenis'
import { PropsWithChildren } from 'react'

export function LenisProvider({ children }: PropsWithChildren) {
    return <ReactLenis root>{children}</ReactLenis>
}
