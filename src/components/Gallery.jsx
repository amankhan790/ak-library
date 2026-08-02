import React, { useMemo, useState } from 'react'

const categories = ['All', 'Study Hall', 'Interior', 'Students', 'Events']

const galleryItems = [
    { id: 1, category: 'Study Hall', title: 'Quiet study hall', image: '/facilities/hall.jpeg' },
    { id: 2, category: 'Students', title: 'Students studying', image: '/facilities/hall.jpeg' },
    { id: 3, category: 'Events', title: 'Library event space', image: '/facilities/hall.jpeg' },
    { id: 4, category: 'Study Hall', title: 'Focused reading space', image: '/facilities/hall.jpeg' },
    { id: 5, category: 'Students', title: 'Group photo inside library', image: '/facilities/hall.jpeg' },
    { id: 6, category: 'Interior', title: 'Interior aisle view', image: '/facilities/hall.jpeg' },
    { id: 7, category: 'Students', title: 'Students at desks', image: '/facilities/hall.jpeg' },
    { id: 8, category: 'Interior', title: 'Long reading rows', image: '/facilities/hall.jpeg' },
    { id: 9, category: 'Events', title: 'Bookshelf corner', image: '/facilities/hall.jpeg' },
]

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('All')

    const filteredItems = useMemo(() => {
        if (activeCategory === 'All') {
            return galleryItems
        }

        return galleryItems.filter((item) => item.category === activeCategory)
    }, [activeCategory])

    return (
        <section id="gallery" className="bg-white  pt-10 sm:pt-14 lg:py-20">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Gallery</h2>
                    <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-amber-400" aria-hidden="true" />
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
                    {categories.map((category) => {
                        const isActive = category === activeCategory

                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                className={`min-w-20 rounded-md border px-5 py-2 text-sm font-medium transition-all duration-200 sm:min-w-24 sm:px-6 sm:py-2.5 ${isActive
                                    ? 'border-amber-500 bg-amber-500 text-white shadow-[0_10px_20px_rgba(245,158,11,0.22)]'
                                    : 'border-slate-400 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50'
                                    }`}
                                aria-pressed={isActive}
                            >
                                {category}
                            </button>
                        )
                    })}
                </div>

                <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {filteredItems.map((item) => (
                        <article
                            key={item.id}
                            className="group overflow-hidden rounded-2xl bg-slate-100 shadow-[0_10px_24px_rgba(15,23,42,0.08)] ring-1 ring-slate-200"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/12 via-transparent to-transparent" />
                            </div>
                        </article>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <p className="mt-8 text-center text-sm text-slate-500">No photos found in this category.</p>
                )}

                <div className="mt-8 flex justify-center sm:mt-10">
                    <button
                        type="button"
                        className="min-w-[220px] rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(15,23,42,0.18)] transition-colors duration-200 hover:bg-slate-800"
                    >
                        View More Photos
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Gallery