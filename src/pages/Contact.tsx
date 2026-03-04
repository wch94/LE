export default function Contact() {
  return (
    <div className="panel">
      <div className="panel-heading">
        <div className="panel-heading-style">Contact L&amp;E</div>
        <div className="panel-subheading-style">We're here to help</div>
      </div>
      <div className="panel-body">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <img src="/images/contact.png" alt="Contact" className="w-full rounded-xl shadow-sm border border-gray-100 dark:border-gray-700" />

            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 space-y-3 dark:bg-blue-900/20 dark:border-blue-800">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="not-italic text-gray-700 text-sm leading-6 dark:text-gray-300">
                  1721 Bethel Road<br />
                  Columbus, OH 43220-0285
                </address>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+16144596500" className="text-gray-700 text-sm font-semibold hover:text-blue-600 transition-colors dark:text-gray-300">
                  (614) 459-6500
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 flex items-center">
            <img
              className="rounded-xl shadow-lg border border-gray-200 w-full dark:border-gray-700"
              src="/images/contact-map.png"
              alt="Office location map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
