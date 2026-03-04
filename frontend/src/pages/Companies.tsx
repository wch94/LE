interface Company {
  name: string;
  logo: string;
  url: string;
}

const companies: Company[] = [
  { name: 'Anthem', logo: '/images/companies/anthem.webp', url: 'https://www.anthem.com/' },
  { name: 'Liberty Mutual', logo: '/images/companies/liberty.webp', url: 'https://www.libertymutual.com/' },
  { name: 'Cincinnati Insurance Companies', logo: '/images/companies/cincy.webp', url: 'https://www.cinfin.com/' },
  { name: 'Safeco', logo: '/images/companies/safeco.webp', url: 'https://www.safeco.com/' },
  { name: 'Philadelphia Insurance', logo: '/images/companies/philly.webp', url: 'https://phly.com/' },
  { name: 'Progressive', logo: '/images/companies/progressive.webp', url: 'https://www.progressive.com/' },
  { name: 'Medical Mutual', logo: '/images/companies/medical-mutual.webp', url: 'https://www.medmutual.com/' },
  { name: 'United Health Care', logo: '/images/companies/united-health-care.webp', url: 'https://www.uhc.com/' },
  { name: 'Cambridge', logo: '/images/companies/cambridge.png', url: 'https://camlife.com/' },
  { name: 'Capital Group / American Funds', logo: '/images/companies/american-funds.webp', url: 'https://www.capitalgroup.com/' },
];

export default function Companies() {
  return (
    <div className="panel">
      <div className="panel-heading">
        <div className="panel-heading-style">Our Insurance Partners</div>
        <div className="panel-subheading-style">Top-rated carriers we work with to protect you</div>
      </div>
      <div className="panel-body">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {companies.map((company, index) => (
            <a
              key={index}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              title={company.name}
              className="flex items-center justify-center p-5 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 no-underline group dark:bg-gray-800 dark:border-gray-700 dark:hover:border-blue-500"
            >
              <img
                className="h-14 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                src={company.logo}
                alt={company.name}
              />
            </a>
          ))}

          {/* "And more" card */}
          <div className="flex flex-col items-center justify-center p-5 bg-gray-50 border border-dashed border-gray-300 rounded-xl text-center dark:bg-gray-800/60 dark:border-gray-600">
            <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <p className="text-xs text-gray-500 leading-relaxed font-medium dark:text-gray-400">
              Numerous additional underwriting relationships through industry intermediaries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
