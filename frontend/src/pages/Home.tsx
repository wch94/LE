import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full space-y-8">
      {/* Hero grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Action sidebar */}
        <div className="flex flex-col gap-4">
          <Link
            to="/claims-reporting"
            className="flex flex-col items-center justify-center text-center p-6 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 no-underline"
          >
            <svg className="w-8 h-8 mb-2 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="font-bold text-base leading-tight">Claims Reporting</span>
            <span className="text-red-200 text-sm mt-0.5">Contact Numbers</span>
          </Link>

          <div className="flex flex-col items-center justify-center text-center p-5 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <svg className="w-7 h-7 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="text-gray-500 text-sm font-medium dark:text-gray-400">Call Us Today</div>
            <a href="tel:+16144596500" className="text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors no-underline mt-0.5 dark:text-gray-100">
              (614) 459-6500
            </a>
          </div>

          <Link
            to="/newsletter"
            className="flex flex-col items-center justify-center text-center p-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 no-underline"
          >
            <svg className="w-8 h-8 mb-2 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-bold text-base leading-tight">Insurance</span>
            <span className="text-blue-200 text-sm mt-0.5">Newsletter</span>
          </Link>
        </div>

        {/* Featured image */}
        <div className="flex items-stretch">
          <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            <img
              src="/images/carousel/img1.jpg"
              alt="Lauterbach & Eilber"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* History text */}
        <div className="flex flex-col justify-center">
          <span className="inline-flex self-start bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 dark:bg-blue-900/40 dark:text-blue-400">
            Est. 1868
          </span>
          <h2 className="text-2xl font-bold text-slate-800 mb-4 leading-snug dark:text-gray-100">
            Serving Columbus for Over 150 Years
          </h2>
          <p className="text-gray-600 leading-7 text-sm">
            In March 1868, John Lauterbach, a German immigrant, formed an agency to write fire insurance and help people in the growing Columbus community protect their hard-earned assets.
          </p>
          <p className="text-gray-600 leading-7 text-sm mt-3">
            Wesley Eilber joined the agency in 1886. Through the following 100 years, descendants of Lauterbach &amp; Eilber managed the agency. Today, our experienced staff carries on the tradition of excellence in serving the insurance needs of central Ohio.
          </p>
          <Link
            to="/about"
            className="mt-5 inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-semibold text-sm no-underline transition-colors"
          >
            Learn our story
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Quick nav cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { to: '/coverage', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'Coverage' },
          { to: '/expertise', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z', label: 'Expertise' },
          { to: '/companies', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', label: 'Companies' },
          { to: '/our-team', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', label: 'Our Team' },
        ].map(item => (
          <Link
            key={item.to}
            to={item.to}
            className="flex flex-col items-center gap-2.5 p-5 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 hover:shadow-md transition-all duration-200 no-underline group dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:border-blue-500"
          >
            <div className="w-10 h-10 rounded-full bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center transition-colors dark:bg-blue-900/40 dark:group-hover:bg-blue-900/60">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-700 transition-colors dark:text-gray-300 dark:group-hover:text-blue-400">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
