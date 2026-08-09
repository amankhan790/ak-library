import React, { useEffect, useState } from 'react'

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    const closeMenu = () => setIsMenuOpen(false)

    return (
        <nav
            className={`sticky top-0 z-50 flex items-center justify-between py-4 px-6 md:py-6 md:px-8 bg-gray-800 text-white transition-shadow ${isScrolled ? 'border-b-2 border-amber-400 shadow-md' : ''
                }`}
        >
            <div className='flex items-center space-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <g fill="none" color="amber">
                        <path fill="currentColor" fillOpacity=".16" d="M12 7.333C12 5.5 10.5 4 8.667 4H2v12h6.708C12 16 12 19.334 12 19.334S12 16 15.333 16H22V4h-6.667A3.343 3.343 0 0 0 12 7.333" />
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 7.333C12 5.5 10.5 4 8.667 4H2v12h6.708C12 16 12 19.334 12 19.334m0-12C12 5.5 13.5 4 15.333 4H22v12h-6.667C12 16 12 19.334 12 19.334m0-12v12m1.875 1.124A2.58 2.58 0 0 1 16.167 19H21m-10.875 1.458A2.54 2.54 0 0 0 7.833 19H3" />
                    </g>
                </svg>

                <h1 className='text-xl font-bold first-letter:text-amber-400'>A.K Library</h1>
            </div>

            <ul className='hidden md:flex space-x-4'>
                {navLinks.map((link) => (
                    <li key={link.href} className='hover:text-amber-400 transition-all'>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>

            <div className='flex items-center gap-3'>
                <button className='bg-amber-500 hover:bg-amber-600 text-black cursor-pointer font-bold py-2 px-4 rounded transition-all text-sm md:text-base'>
                    <a href="#contact">Join Now</a>
                </button>

                <button
                    type='button'
                    className='md:hidden flex flex-col justify-center items-center w-10 cursor-pointer h-10 rounded hover:bg-gray-700 transition-all'
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                >
                    <span
                        className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
                            }`}
                    />
                </button>
            </div>

            {isMenuOpen && (
                <div className='md:hidden absolute top-full left-0 right-0 bg-gray-800 border-b border-gray-600 shadow-lg '>
                    <ul className='flex flex-col py-4 px-6 space-y-4'>
                        {navLinks.map((link) => (
                            <li key={link.href} className='hover:text-amber-400 transition-all'>
                                <a href={link.href} onClick={closeMenu}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
