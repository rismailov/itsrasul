export const HeroSection = () => {
    return (
        <section>
            <div className="container border-b">
                <div className="w-full flex flex-col sm:flex-row">
                    <div className="flex-1 flex flex-col items-start justify-between leading-none pt-8 sm:pb-8 sm:edge-padding-r sm:border-r">
                        <h1 className="text-xl sm:text-2xl text-center sm:text-left uppercase">
                            <span className="text-foreground">
                                Full-stack Web Developer{' '}
                            </span>
                            with a passion for building sites that PERFORM
                        </h1>

                        <svg
                            width="120"
                            height="120"
                            className="hidden sm:inline fill-border"
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_105_296)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M200 98.5234C196.477 99.4861 192.769 100 188.941 100H144.233C121.117 100 102.378 118.739 102.378 141.854V191.319C102.378 194.295 102.067 197.199 101.477 200C100.514 196.477 100 192.769 100 188.941V144.233C100 121.117 81.2612 102.378 58.1456 102.378H8.68122C5.70469 102.378 2.80073 102.067 0 101.477C3.52289 100.514 7.23105 100 11.0593 100H55.7675C78.8831 100 97.622 81.2611 97.622 58.1456L97.622 8.68118C97.622 5.70466 97.9327 2.80071 98.5234 0C99.4861 3.5229 100 7.23107 100 11.0593V55.7675C100 78.8831 118.739 97.622 141.855 97.622H191.319C194.295 97.622 197.199 97.9327 200 98.5234Z"
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="sm:w-[45%] py-8 sm:edge-padding-l flex flex-col justify-between">
                        <div className="hidden sm:flex mb-12 w-28 h-28 rounded-full border items-center justify-center"></div>

                        <p className="w-full font-paragraph text-muted-foreground sm:text-foreground text-center sm:text-left">
                            Hi, I'm Rasul. A self-taught full-stack web
                            developer from Baku, passionate about crafting
                            beautiful web, mobile expo and mobile experiences.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
