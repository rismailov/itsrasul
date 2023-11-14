export const Footer = () => {
    return (
        <footer className="h-20">
            <div className="container">
                <div className="px-8 flex items-center justify-between">
                    <div className="py-8 pr-8">
                        <p className="text-muted-foreground font-paragraph text-sm">
                            {new Date().getFullYear()}. Rasul Mamedov. No
                            copyright. You are free to copy anything you want
                            from this website.
                        </p>
                    </div>

                    {/* gap */}
                    <div className="flex-1"></div>
                </div>
            </div>
        </footer>
    )
}
