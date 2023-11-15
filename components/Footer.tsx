export const Footer = () => {
    return (
        <footer className="h-20">
            <div className="container">
                <div className="h-full flex items-center">
                    <p className="text-center md:text-left text-muted-foreground font-paragraph [&>svg]:fill-foregorund">
                        {new Date().getFullYear()}. Portfolio V1. Made with 🖤
                        and ☕️ by Rasul. No copyright.
                    </p>
                </div>
            </div>
        </footer>
    )
}
