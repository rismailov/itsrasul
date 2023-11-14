import {
    SpriteGsap,
    SpriteInertia,
    SpriteLaravel,
    SpriteMysql,
    SpriteNext,
    SpritePhp,
    SpritePostgres,
    SpriteReact,
    SpriteTailwind,
    SpriteTypescript,
} from './sprites'

export const STACKS = {
    php: 'PHP',
    next: 'NEXT',
    react: 'REACT',
    typescript: 'TYPESCRIPT',
    tailwind: 'TAILWIND',
    postgres: 'POSTGRES',
    laravel: 'LARAVEL',
    inertia: 'INERTIA',
    mysql: 'MYSQL',
    gsap: 'GSAP',
} as const

export const StackSprite = ({
    stack,
}: {
    stack: (typeof STACKS)[keyof typeof STACKS]
}) => {
    switch (stack) {
        case STACKS.php:
            return <SpritePhp />
        case STACKS.next:
            return <SpriteNext />
        case STACKS.react:
            return <SpriteReact />
        case STACKS.typescript:
            return <SpriteTypescript />
        case STACKS.tailwind:
            return <SpriteTailwind />
        case STACKS.postgres:
            return <SpritePostgres />
        case STACKS.laravel:
            return <SpriteLaravel />
        case STACKS.mysql:
            return <SpriteMysql />
        case STACKS.gsap:
            return <SpriteGsap />
        default:
            return <SpriteInertia />
    }
}
