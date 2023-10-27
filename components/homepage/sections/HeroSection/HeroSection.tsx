'use client'

import { AbstractCircles } from './AbstractCircles'

export const HeroSection = () => {
    return (
        <section className="w-full relative overflow-hidden h-[calc(100vh-60px)] bg-black">
            <AbstractCircles />

            <div className="h-[calc(100vh-80px)] rounded-bl-3xl rounded-br-3xl bg-background dark:bg-secondary">
                <div className="container pt-32 pb-10 z-10">
                    {/* wrapper */}
                    <div className="h-full flex flex-col justify-between">
                        {/* intro */}
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10 h-10 fill-muted-foreground"
                                viewBox="0 0 64 64"
                                fill="none"
                            >
                                <path d="M30.7368 13.4737V0H33.2632V13.4737H30.7368Z" />
                                <path d="M28.9505 30.7368L20.3886 22.1749L22.1749 20.3885L30.7368 28.9504V16.8421H33.2632V28.9504L41.8251 20.3885L43.6114 22.1749L35.0495 30.7368H47.1579V33.2632H35.0496L43.6114 41.825L41.8251 43.6114L33.2632 35.0495V47.1579H30.7368V35.0495L22.1749 43.6114L20.3886 41.825L28.9504 33.2632H16.8421V30.7368H28.9505Z" />
                                <path d="M0 30.7368H13.4737V33.2632H0V30.7368Z" />
                                <path d="M50.5263 30.7368H64V33.2632H50.5263V30.7368Z" />
                                <path d="M30.7368 50.5263V64H33.2632V50.5263H30.7368Z" />
                                <path d="M18.0067 44.2068L8.47939 53.7342L10.2658 55.5205L19.7931 45.9932L18.0067 44.2068Z" />
                                <path d="M44.2069 18.0067L53.7342 8.47934L55.5206 10.2657L45.9933 19.793L44.2069 18.0067Z" />
                                <path d="M45.9933 44.2068L55.5206 53.7342L53.7342 55.5205L44.2069 45.9932L45.9933 44.2068Z" />
                                <path d="M19.7931 18.0067L10.2658 8.47934L8.4794 10.2657L18.0067 19.793L19.7931 18.0067Z" />
                            </svg>

                            <h1 className="font-heading mt-5 max-w-3xl text-3xl">
                                Full-stack web developer who is passionate about
                                building modern, responsive & high-converting
                                websites with an excellent attention to detail.
                            </h1>
                        </div>

                        {/* hero footer */}
                        <div className="flex items-center justify-between">
                            {/* profession */}
                            <div className="flex flex-col">
                                <p className="text-muted-foreground">
                                    Freelance
                                </p>
                                <p className="font-medium">
                                    Full-Stack Web Developer
                                </p>
                            </div>

                            {/* location */}
                            <div className="flex flex-col">
                                <p className="text-muted-foreground">
                                    Based in
                                </p>
                                <p className="font-medium">Baku</p>
                            </div>

                            {/* contact */}
                            <div className="flex flex-col">
                                <p className="text-muted-foreground">
                                    Get in touch
                                </p>
                                <p className="font-medium">
                                    hello@itsrasul.dev
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
