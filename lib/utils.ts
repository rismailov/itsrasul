import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
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
