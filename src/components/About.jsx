import React from 'react'
import Reveal from './Reveal'

const pillars = [
    {
        title: 'Our Mission',
        text: 'To build a focused community of learners and help them achieve success.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
            </svg>
        ),
    },
    {
        title: 'Our Vision',
        text: 'To be the most trusted and preferred study space in Muzaffarnagar.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
    },
    {
        title: 'Our Values',
        text: 'Discipline, Respect, Cleanliness and Student Success.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        title: 'Our Promise',
        text: 'We are committed to providing the best environment for your bright future.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                <path d="m21 3 1 11h-2" />
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                <path d="M3 4h8" />
            </svg>
        ),
    },
]

const About = () => {
    return (
        <section id="about">
            {/* Intro */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
                    <Reveal as="div" className="w-full lg:w-1/2" distance={24}>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            About A.K Library
                        </h2>
                        <div className="mt-3 w-16 h-1 bg-amber-400 rounded-full" aria-hidden="true" />

                        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                            A.K Library was established with a simple mission – to provide a peaceful,
                            comfortable and fully equipped study environment for students who are serious
                            about their goals.
                        </p>
                        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                            We understand the needs of today&apos;s learners. That&apos;s why we have created
                            a space where you can focus without any distractions and perform at your best.
                        </p>
                    </Reveal>

                    <Reveal as="div" delay={120} className="w-full lg:w-1/2 sm:mt-12" distance={24}>
                        <img
                            src="/images/heroimg.png"
                            alt="Students studying in A.K Library's spacious study hall"
                            className="w-full sm:h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                            loading="lazy"
                        />
                    </Reveal>
                </div>
            </div>

            {/* Mission, Vision, Values, Promise */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pb-12 sm:pb-16 md:pb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-6 xl:gap-10">
                    {pillars.map((pillar, index) => (
                        <Reveal
                            as="div"
                            key={pillar.title}
                            delay={index * 90}
                            distance={18}
                            className="flex flex-col items-center text-center px-2 shadow-xl rounded-2xl py-10 hover:shadow-amber-400 transition-all"
                        >
                            <div className="text-amber-400 mb-4">{pillar.icon}</div>
                            <h3 className="text-base sm:text-lg font-bold text-gray-900">{pillar.title}</h3>
                            <p className="mt-2 text-sm sm:text-base text-gray-800 leading-relaxed px-2">
                                {pillar.text}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Quote Banner */}
            <div className="bg-[#0a1118] rounded-t-2xl">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-4 sm:py-4  flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
                    <Reveal as="blockquote" className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif italic text-amber-400 leading-snug text-center sm:text-left max-w-3xl" distance={20}>
                        &ldquo;The right environment can change your thoughts, your thoughts can change your life.&rdquo;
                    </Reveal>

                    <Reveal as="div" delay={120} className="shrink-0 text-amber-400/80" distance={18}>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24" className='rotate-'>
                            <path d="M0 0h24v24H0z" fill="none" />
                            <g fill="none" color="amber">
                                <path fill="currentColor" fillOpacity=".16" d="M12 7.333C12 5.5 10.5 4 8.667 4H2v12h6.708C12 16 12 19.334 12 19.334S12 16 15.333 16H22V4h-6.667A3.343 3.343 0 0 0 12 7.333" />
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 7.333C12 5.5 10.5 4 8.667 4H2v12h6.708C12 16 12 19.334 12 19.334m0-12C12 5.5 13.5 4 15.333 4H22v12h-6.667C12 16 12 19.334 12 19.334m0-12v12m1.875 1.124A2.58 2.58 0 0 1 16.167 19H21m-10.875 1.458A2.54 2.54 0 0 0 7.833 19H3" />
                            </g>
                        </svg> */}
                        <img src="/book.png" alt="Book" className='w-50 h-50 rotate-[-15deg]' />
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default About
