import React from 'react'

const stats = [
    {
        value: '108+',
        label: 'Comfortable Seats',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" />
                <path d="M4 12h16v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5z" />
                <path d="M8 19v2M16 19v2" />
            </svg>
        ),
    },
    {
        value: '500+',
        label: 'Happy Members',
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
        value: '100%',
        label: 'Focused Environment',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8l1.5 1.5L12 11l-1.5-1.5L12 8z" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        value: '24/7',
        label: 'CCTV Security',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
                <circle cx="12" cy="14" r="3" />
                <circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
]

const StatsBar = () => {
    return (
        <section className="bg-[#0a1118] text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <div
                        key={stat.label}
                        className={`flex items-center gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 py-6 sm:py-8 lg:py-10
                            ${index % 2 === 0 ? 'border-r border-gray-700/50' : ''}
                            ${index < 2 ? 'border-b border-gray-700/50 lg:border-b-0' : ''}
                            ${index < 3 ? 'lg:border-r lg:border-gray-700/50' : ''}
                        `}
                    >
                        <div className="shrink-0 text-amber-400">{stat.icon}</div>
                        <div>
                            <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">{stat.value}</p>
                            <p className="mt-1 text-xs sm:text-sm text-white/80">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default StatsBar
