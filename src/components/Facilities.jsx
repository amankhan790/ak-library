import React from 'react'

const facilities = [
    {
        title: 'AC Study Hall',
        description: 'Fully air-conditioned study hall for maximum comfort.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.9rem" height="1.9rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
        image: '/facilities/hall.jpeg',
        alt: 'Study hall interior with air conditioning',
    },
    {
        title: 'High-Speed WIFI',
        description: 'Fast & reliable internet to help you study without interruption.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.9rem" height="1.9rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
        image: '/facilities/router.webp',
        alt: 'Wireless router for high-speed internet',
    },
    {
        title: 'Comfortable Seating',
        description: 'Ergonomic chairs and spacious tables for long study hours.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.9rem" height="1.9rem" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <g fill="none" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" d="M17 21v-5M7 21v-5" />
                    <path d="M15.5 12h-7c-1.65 0-2.475 0-2.988.586c-.286.326-.412.764-.468 1.415c-.077.9-.116 1.351.181 1.675S6.015 16 7 16h10c.985 0 1.477 0 1.774-.324c.298-.324.259-.774.181-1.675c-.055-.65-.182-1.088-.468-1.415C17.975 12 17.15 12 15.5 12ZM7 8c0-1.87 0-2.804.402-3.5A3 3 0 0 1 8.5 3.402C9.196 3 10.13 3 12 3s2.804 0 3.5.402A3 3 0 0 1 16.598 4.5C17 5.196 17 6.13 17 8v4H7z" />
                </g>
            </svg>

        ),
        image: '/facilities/sitting.webp',
        alt: 'Comfortable seating inside the library',
    },
    {
        title: 'Power Backup',
        description: 'Uninterrupted power supply for a smooth study experience.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.9rem" height="1.9rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="3" width="12" height="18" rx="2" />
                <path d="M12 7v4" />
                <path d="M12 14h.01" />
            </svg>
        ),
        image: '/facilities/power.webp',
        alt: 'Power backup equipment',
    },
    {
        title: 'RO Water',
        description: 'Pure & clean RO water to keep you energized.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.9rem" height="1.9rem" viewBox="0 0 512 512">
                <path d="M0 0h512v512H0z" fill="none" />
                <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M400 320c0 88.37-55.63 144-144 144s-144-55.63-144-144c0-94.83 103.23-222.85 134.89-259.88a12 12 0 0 1 18.23 0C296.77 97.15 400 225.17 400 320Z" />
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 328a72 72 0 0 1-72 72" />
            </svg>

        ),
        image: '/facilities/ro.webp',
        alt: 'RO water purifier',
    },
    {
        title: 'CCTV Security',
        description: '24/7 CCTV surveillance for a safe and secure environment.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.9rem" height="1.9rem" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97m1.696-5.627a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3zM2 19h3.76a2 2 0 0 0 1.8-1.1L9 15m-7 6v-4m5-8h.01" />
            </svg>

        ),
        image: '/facilities/cctv.webp',
        alt: 'CCTV camera for security monitoring',
    },
    {
        title: 'Personal Locker',
        description: 'Secure lockers to keep your belongings safe.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.9rem" height="1.9rem" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="currentColor" d="M4 22V8h3V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h3v14zm2-2h12V10H6zm7.413-3.588Q14 15.826 14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17t1.413-.587M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6zM6 20V10z" />
            </svg>

        ),
        image: '/facilities/locker.webp',
        alt: 'Personal lockers for students',
    },
    {
        title: 'Newspapers & Magazines',
        description: 'Stay updated with daily newspapers and magazines.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <g fill="none" color="amber">
                    <path fill="currentColor" fillOpacity=".16" d="M12 7.333C12 5.5 10.5 4 8.667 4H2v12h6.708C12 16 12 19.334 12 19.334S12 16 15.333 16H22V4h-6.667A3.343 3.343 0 0 0 12 7.333" />
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 7.333C12 5.5 10.5 4 8.667 4H2v12h6.708C12 16 12 19.334 12 19.334m0-12C12 5.5 13.5 4 15.333 4H22v12h-6.667C12 16 12 19.334 12 19.334m0-12v12m1.875 1.124A2.58 2.58 0 0 1 16.167 19H21m-10.875 1.458A2.54 2.54 0 0 0 7.833 19H3" />
                </g>
            </svg>
        ),
        image: '/facilities/paper.webp',
        alt: 'Newspapers and magazines on a table',
    },
    {
        title: 'Clean Washrooms',
        description: 'Hygienic and well-maintained washrooms.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.9rem" height="1.9rem" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="none" stroke="currentColor" stroke-width="1.5" d="M4.5 4.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m0 18.5v-4H2l1.5-8s1-1.5 3.5-1.5s3.5 1.5 3.5 1.5l1.5 8H9.5v4m9-7.5c-1.5 0-2.5.944-2.5.944L15 22h7l-1-5.556s-1-.944-2.5-.944Zm0-14v14" />
            </svg>

        ),
        image: '/facilities/washroom.webp',
        alt: 'Clean washroom interior',
    },
]

const Facilities = () => {
    return (
        <section id="facilities" className="pt-14 sm:pt-16 md:pt-20 lg:pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="text-center mb-10 sm:mb-12 md:mb-14">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                        Our Facilities
                    </h2>
                    <div className="mt-4 mx-auto h-1 w-14 rounded-full bg-amber-400" aria-hidden="true" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                    {facilities.map((facility) => (
                        <article
                            key={facility.title}
                            className="group overflow-hidden rounded-2xl bg-white-300 shadow-[0_8px_30px_rgba(15,23,42,0.08)] ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1"
                        >
                            <div className="flex h-full flex-col sm:flex-row items-stretch">

                                <div className="flex-1 p-5 sm:p-6 flex flex-col  justify-center min-h-47.5 sm:min-h-52.5">
                                    <div className="text-black mb-4 sm:flex items-center justify-center">{facility.icon}</div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                                        {facility.title}
                                    </h3>
                                    <p className="mt-3 text-sm sm:text-[0.95rem] leading-6 text-gray-600 max-w-xs">
                                        {facility.description}
                                    </p>
                                </div>

                                <div className="sm:w-[44%] lg:w-[42%] shrink-0  p-2">
                                    <img
                                        src={facility.image}
                                        alt={facility.alt}
                                        className="sm:h-48 w-full object-cover sm:h-full rounded-2xl"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Facilities