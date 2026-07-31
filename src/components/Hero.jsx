import React from 'react'

const features = [
    {
        label: 'AC Comfort',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
    },
    {
        label: 'High-Speed WIFI',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: 'Secure & Safe',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
]

const Hero = () => {
    return (
        <>
            <section className="relative w-full min-h-[70vh] sm:min-h-[75vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-end overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/Images/heroimg.png)' }}
                    aria-hidden="true"
                />

                <div
                    className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25 md:from-black/80 md:via-black/45 md:to-transparent"
                    aria-hidden="true"
                />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-10 sm:px-8 sm:pb-12 md:px-12 md:pb-16 lg:pb-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-3xl">
                        Find Your{' '} <br />
                        <span className="text-amber-400">Perfect Study</span>{' '} <br />
                        Space
                    </h1>

                    <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/90 max-w-74 sm:max-w-sm leading-relaxed">
                        A peaceful, comfortable and inspiring environment designed for serious learners.
                    </p>

                    <ul className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
                        {features.map((feature) => (
                            <li
                                key={feature.label}
                                className="flex items-center gap-2 rounded-full bg-black/45 backdrop-blur-sm border border-white/10 px-3 py-2 sm:px-4 sm:py-2.5 text-amber-400 text-xs sm:text-sm font-medium"
                            >
                                {feature.icon}
                                <span>{feature.label}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                        <button
                            type="button"
                            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 sm:px-8 rounded-lg transition-all cursor-pointer text-sm sm:text-base"
                        >
                            Join Now
                        </button>
                        <button
                            type="button"
                            className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 sm:px-8 rounded-lg transition-all cursor-pointer text-sm sm:text-base"
                        >
                            Book a Free Visit
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
