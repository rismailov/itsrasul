import { Button } from '../../ui/button'
import { SpriteGithub, SpriteTelegram, SpriteWhatsapp } from './sprites'

export const SocialLinks = () => {
    return (
        <ul className="h-full grid grid-cols-3 gap-0 md:gap-2 place-content-center [&>li]:h-full">
            <li>
                <Button size="icon" asChild>
                    <a
                        href="https://github.com/rismailov"
                        target="_blank"
                        aria-label="Visit github account"
                    >
                        <SpriteGithub className="w-4.5 h-4.5 fill-foreground" />
                    </a>
                </Button>
            </li>

            <li>
                <Button size="icon" asChild>
                    <a
                        href="https://telegram.me/nvrasul"
                        target="_blank"
                        aria-label="Text me in Telegram"
                    >
                        <SpriteTelegram className="w-4.5 h-4.5 fill-foreground" />
                    </a>
                </Button>
            </li>

            <li>
                <Button size="icon" asChild>
                    <a
                        href="https://wa.link/1rlt5m"
                        target="_blank"
                        aria-label="Text me in WhatsApp"
                    >
                        <SpriteWhatsapp className="w-4.5 h-4.5 fill-foreground" />
                    </a>
                </Button>
            </li>
        </ul>
    )
}
