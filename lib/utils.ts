import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function distMetric(x: number, y: number, x2: number, y2: number) {
    const xDiff = x - x2
    const yDiff = y - y2

    return xDiff * xDiff + yDiff * yDiff
}

export function closestEdge(x: number, y: number, w: number, h: number) {
    const topEdgeDist = distMetric(x, y, w / 2, 0)
    const bottomEdgeDist = distMetric(x, y, w / 2, h)

    const min = Math.min(topEdgeDist, bottomEdgeDist)

    return min === topEdgeDist ? 'top' : 'bottom'
}
