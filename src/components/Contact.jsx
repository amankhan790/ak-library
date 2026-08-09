import React from 'react'

const contactDetails = [
    {
        label: 'Address',
        value: '1st floor, Madarsa Ke samne Sompal Hardware, A.K Library, Shamli Rd, near Durga Mandir, Muzaffarnagar, Uttar Pradesh 251306',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" />
                <circle cx="12" cy="9" r="2.5" />
            </svg>
        ),
    },
    {
        label: 'Phone',
        value: '+91 98186 70147',
        href: 'https://wa.me/919818670147?text=Hello%20there',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M22 16.9v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.18 2 2 0 0 1 4.1 1h2a2 2 0 0 1 2 1.72c.12.89.34 1.76.66 2.59a2 2 0 0 1-.45 2.11L7.44 8.59a16 16 0 0 0 6 6l1.17-1.17a2 2 0 0 1 2.11-.45c.83.32 1.7.54 2.59.66A2 2 0 0 1 22 16.9Z" />
            </svg>
        ),
    },
    {
        label: 'Email',
        value: 'aman.webdev.in@gmail.com',
        href: 'mailto:aman.webdev.in@gmail.com',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
            </svg>
        ),
    },
    {
        label: 'Timing',
        value: 'Open All Days\n6:00 AM - 10:00 PM',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
            </svg>
        ),
    },
]

const mapQuery = encodeURIComponent(
    '1st floor, Madarsa Ke samne Sompal Hardware, A.K Library, Shamli Rd, near Durga Mandir, Muzaffarnagar, Uttar Pradesh 251306',
)

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const name = String(formData.get('name') || '').trim()
        const phone = String(formData.get('phone') || '').trim()
        const email = String(formData.get('email') || '').trim()
        const message = String(formData.get('message') || '').trim()

        const subject = encodeURIComponent(`Message from ${name || 'A.K Library website'}`)
        const body = encodeURIComponent(
            `Name: ${name || 'N/A'}\nPhone: ${phone || 'N/A'}\nEmail: ${email || 'N/A'}\n\nMessage:\n${message || 'N/A'}`,
        )

        window.location.href = `mailto:aman.webdev.in@gmail.com?subject=${subject}&body=${body}`
        event.currentTarget.reset()
    }

    return (
        <section id="contact" className="bg-white py-12 sm:py-16 lg:py-22">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Contact Us</h2>
                    <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-amber-400" aria-hidden="true" />
                </div>
                <div className="mt-7 overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                    <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                        <div className="border-slate-200 px-5 py-8 sm:px-7 sm:py-10 lg:border-r lg:px-8 xl:px-10">
                            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Get In Touch</h2>
                            <p className="mt-2 text-sm font-medium  sm:text-base">We are here to help you.</p>

                            <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-7">
                                {contactDetails.map((item) => (
                                    <div key={item.label} className="flex gap-4 sm:gap-5">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-amber-500 shadow-[0_8px_18px_rgba(251,191,36,0.12)]">
                                            {item.icon}
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{item.label}</h3>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                                                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                    aria-label={item.label === 'Phone' ? `Message ${item.value} on WhatsApp` : undefined}
                                                    className="mt-1 block text-sm leading-6 text-slate-600 transition-colors hover:text-amber-600 sm:text-[15px]"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="mt-1 whitespace-pre-line text-sm leading-6 text-slate-600 sm:text-[15px]">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="px-5 py-8 sm:px-7 sm:py-10 lg:px-8 xl:px-10">
                            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Send Us a Message</h2>

                            <form className="mt-6 space-y-4 sm:mt-8" onSubmit={handleSubmit}>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        className="h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                                    />
                                </div>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                                />

                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows={8}
                                    className="min-h-44 w-full resize-none rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-100 sm:min-h-52"
                                />

                                <button
                                    type="submit"
                                    className="h-12 w-full rounded-md bg-slate-900 text-sm font-semibold text-white shadow-[0_14px_24px_rgba(15,23,42,0.18)] transition-colors duration-200 hover:bg-slate-800"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="border-t border-slate-200 px-5 py-8 sm:px-7 sm:py-10 lg:px-8 xl:px-10">
                        <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-[28px]">Find Us</h3>

                        <div className="mt-5 grid gap-4 lg:grid-cols-2 lg:gap-5">
                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
                                <div className="relative aspect-[16/11] min-h-[240px] w-full">
                                    <iframe
                                        title="A.K Library location map"
                                        src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                                        className="h-full w-full"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>

                            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
                                <div className="relative aspect-[16/11] min-h-[240px] w-full">
                                    <img
                                        src="/images/hero1.jpg"
                                        alt="A.K Library reading hall"
                                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                                        loading="lazy"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/12 via-transparent to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact