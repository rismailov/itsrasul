export const Footer = () => {
    return (
        <footer className="h-20">
            <div className="container">
                <div className="h-full flex items-center px-8">
                    <p className="text-muted-foreground font-paragraph text-sm">
                        {new Date().getFullYear()}. Rasul Mamedov. No copyright.
                    </p>
                </div>
            </div>
        </footer>
    )
}
