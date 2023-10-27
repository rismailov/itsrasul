import { SpriteGithub } from './sprites/SpriteGithub'
import { SpriteInstagram } from './sprites/SpriteInstagram'
import { SpriteReddit } from './sprites/SpriteReddit'
import { SpriteTelegram } from './sprites/SpriteTelegram'
import { SpriteWhatsapp } from './sprites/SpriteWhatsapp'

export const SocialLinks = () => {
    return (
        <div className="pt-0.5 flex items-center space-x-5 [&>a>svg]:w-6 [&>a>svg]:h-6">
            <a href="https://github.com/rismailov" target="_blank">
                <SpriteGithub />
            </a>

            <a href="https://t.me/nvrasul" target="_blank">
                <SpriteTelegram />
            </a>

            <a href="wa.link/cgbmn9" target="_blank">
                <SpriteWhatsapp />
            </a>

            <a href="https://www.reddit.com/user/rismailov" target="_blank">
                <SpriteReddit />
            </a>

            <a href="https://www.instagram.com/mvrasul/" target="_blank">
                <SpriteInstagram />
            </a>
        </div>
    )
}
