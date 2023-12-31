import { clsx, type ClassValue } from 'clsx'
import { cubicBezier } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function sleep(ms = 500): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

// cool side-aware hover effect
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

// scroll-aware marquee text
export class MarqueeItem {
    element: HTMLHeadingElement
    currentTranslation: number
    speed: number
    direction: boolean
    scrollTop: number
    metric: number
    lerp: {
        current: number
        target: number
        factor: number
    }

    constructor(
        element: HTMLHeadingElement,
        currentTranslation: number,
        speed: number,
    ) {
        this.element = element
        this.currentTranslation = currentTranslation
        this.speed = speed
        this.direction = false
        this.scrollTop = 0
        this.metric = 100

        this.lerp = {
            current: this.currentTranslation,
            target: this.currentTranslation,
            factor: 0.1,
        }

        this.events()
        this.render()
    }

    events() {
        window.addEventListener('scroll', (e) => {
            let direction =
                window.pageYOffset || document.documentElement.scrollTop

            if (direction > this.scrollTop) {
                this.direction = false
                this.lerp.target -= this.speed * 2.5
            } else {
                this.direction = true
                this.lerp.target += this.speed * 2.5
            }

            this.scrollTop = direction <= 0 ? 0 : direction
        })
    }

    lerpFunc(current: number, target: number, factor: number) {
        this.lerp.current = current * (1 - factor) + target * factor
    }

    goForward() {
        this.lerp.target += this.speed
        if (this.lerp.target > this.metric) {
            this.lerp.current -= this.metric * 2
            this.lerp.target -= this.metric * 2
        }
    }

    goBackward() {
        this.lerp.target -= this.speed
        if (this.lerp.target < -this.metric) {
            this.lerp.current -= -this.metric * 2
            this.lerp.target -= -this.metric * 2
        }
    }

    animate() {
        this.direction ? this.goForward() : this.goBackward()
        this.lerpFunc(this.lerp.current, this.lerp.target, this.lerp.factor)

        this.element.style.transform = `translateX(${this.lerp.current}%)`
    }

    render() {
        this.animate()

        window.requestAnimationFrame(() => this.render())
    }
}

// easings
export const easeOutQuart = cubicBezier(...([0.25, 1, 0.5, 1] as const))

// check if element is in the viewport
// code borrowed from https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
export const isInViewport = (el: Element) => {
    const rect = el.getBoundingClientRect()

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    )
}
