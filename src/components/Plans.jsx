import React from 'react'

const planFeatures = ['AC Study Hall', 'High-Speed WIFI', 'Power Backup', 'RO Water', 'CCTV Security']

const benefits = [
  {
    label: 'No Hidden Charges',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.9rem" height="1.9rem" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.485 6.485 2 12 2s10 4.485 10 10s-4.485 10-10 10S2 17.515 2 12m1.5 0c0 4.685 3.815 8.5 8.5 8.5s8.5-3.815 8.5-8.5s-3.815-8.5-8.5-8.5S3.5 7.315 3.5 12m6-2c0 .69.56 1.25 1.25 1.25h2.5A2.755 2.755 0 0 1 16 14v.245a2.755 2.755 0 0 1-2.75 2.75h-.5v1.58h-1.5v-1.58H8.5v-1.5h4.75c.69 0 1.25-.56 1.25-1.25V14c0-.69-.56-1.25-1.25-1.25h-2.5A2.755 2.755 0 0 1 8 10v-.255a2.755 2.755 0 0 1 2.75-2.75h.5V5.5h1.5v1.495H15v1.5h-4.25c-.69 0-1.25.56-1.25 1.25z" clip-rule="evenodd" />
      </svg>

    ),
  },
  {
    label: 'Easy Monthly Renewal',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M12 3a9 9 0 1 0 9 9" />
        <path d="M21 3v6h-6" />
        <path d="M12 8v5l3 2" />
      </svg>
    ),
  },
  {
    label: 'Pause Anytime',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.9rem" height="1.9rem" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path fill="currentColor" d="M14 19V5h4v14zm-8 0V5h4v14z" />
      </svg>

    ),
  },
  {
    label: 'Friendly Support',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.9rem" height="1.9rem" viewBox="0 0 14 14">
        <path d="M0 0h14v14H0z" fill="none" />
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 7V4.37A3.93 3.93 0 0 1 7 .5a3.93 3.93 0 0 1 4 3.87V7M1.5 5.5h1A.5.5 0 0 1 3 6v3a.5.5 0 0 1-.5.5h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1m11 4h-1A.5.5 0 0 1 11 9V6a.5.5 0 0 1 .5-.5h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M9 12.25a2 2 0 0 0 2-2V8m-2 4.25a1.25 1.25 0 0 1-1.25 1.25h-1.5a1.25 1.25 0 0 1 0-2.5h1.5A1.25 1.25 0 0 1 9 12.25" />
      </svg>

    ),
  },
]

const featureIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5 shrink-0 text-emerald-500">
    <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.18" stroke="currentColor" />
    <path d="m8.5 12.25 2.45 2.45L15.75 9.9" />
  </svg>
)

const Plans = () => {
  return (
    <section id="pricing" className="py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white px-4 py-8  sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="mt-4 text-center sm:mt-5 ">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
              Pricing Plans
            </h2>
            <p className="mt-3 text-sm text-slate-700 sm:text-base pb-5">
              Affordable plans for every serious learner.
            </p>
          </div>

          <div className='grid sm:grid-cols-3 gap-6 mt-10'>
            {/* 1 Month Plan */}
            <div className='bg-white rounded-lg shadow-xl p-6 text-center mb-5'>
              <div className='items-center '>
                <h2 className="text-xl font-bold mt-5">1 Month Plan</h2>
                <p className="inline-block text-2xl font-bold mt-4 sm:mt-8 mr-2">₹ 500 </p><span className="text-sm font-bold text-slate-500">/1month</span>
              </div>

              <ul className="my-8 text-left">
                {planFeatures.map((feature) => (
                  <li key={feature} className="mt-4 flex items-center gap-2 text-md text-slate-700">
                    {featureIcon}
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full rounded-lg bg-gray-800 px-4 py-3 text-white font-bold hover:bg-blue-900">
                Join Now
              </button>
            </div>

            {/* 3 Month Plan */}
            <div className='relative'>
              <div className='bg-white rounded-lg shadow-lg p-6 text-center  border-1 border-red-700'>
                <div className='items-center '>
                  <h2 className="text-xl font-bold mt-5">3 Month Plan</h2>
                  <p className="inline-block text-2xl font-bold mt-4 sm:mt-8 mr-2">₹ 1300 </p><span className="text-sm font-bold text-slate-500">/3 months</span>
                </div>

                <ul className="my-8 text-left">
                  {planFeatures.map((feature) => (
                    <li key={feature} className="mt-4 flex items-center gap-2 text-md text-slate-700">
                      {featureIcon}
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 w-full rounded-lg bg-amber-500 px-4 py-3 text-white font-bold hover:bg-amber-600">
                  Join Now
                </button>

                <div className='bg-amber-500 absolute top-[-30px] left-0 rounded-t-lg w-full text-center py-2 border-1 border-red-700'>
                  Most Populer
                </div>
              </div>
            </div>

            {/* 6 Month Plan */}
            <div className='bg-white rounded-lg shadow-lg p-6 text-center'>
              <div className='items-center '>
                <h2 className="text-xl font-bold mt-5">6 Month Plan</h2>
                <p className="inline-block text-2xl font-bold mt-4 sm:mt-8 mr-2">₹ 2400 </p><span className="text-sm font-bold text-slate-500">/6 months</span>
              </div>

              <ul className="my-8 text-left">
                {planFeatures.map((feature) => (
                  <li key={feature} className="mt-4 flex items-center gap-2 text-md text-slate-700">
                    {featureIcon}
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full rounded-lg bg-gray-800 px-4 py-3 text-white font-bold hover:bg-blue-900">
                Join Now
              </button>
            </div>

          </div>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.label}
                className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center shadow-[0_6px_24px_rgba(15,23,42,0.04)] sm:min-h-28 sm:px-5"
              >
                <div className="text-slate-700">{benefit.icon}</div>
                <p className="mt-3 text-sm font-medium text-slate-700 sm:text-base">{benefit.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plans