interface ClaimReporter {
  logo: string;
  name: string;
  website: string;
  hours: string;
  phone: string;
}

const claimReporters: ClaimReporter[] = [
  {
    name: 'Cincinnati Insurance',
    logo: '/images/companies/cincy.webp',
    website: 'https://www.cinfin.com/',
    hours: '24 Hours Claim Reporting',
    phone: '877-242-2544',
  },
  {
    name: 'Safeco Insurance',
    logo: '/images/companies/safeco.webp',
    website: 'https://www.safeco.com/',
    hours: '24 Hours Claim Reporting',
    phone: '800-332-3226',
  },
  {
    name: 'Progressive Insurance',
    logo: '/images/companies/progressive.webp',
    website: 'https://www.progressive.com/',
    hours: '24 Hours Claim Reporting',
    phone: '800-274-4499',
  },
  {
    name: 'Philadelphia Insurance',
    logo: '/images/companies/philly.webp',
    website: 'https://phly.com/',
    hours: '24 Hours Claim Reporting',
    phone: '800-765-9749',
  },
  {
    name: 'Encompass Insurance',
    logo: '/images/companies/encompass.png',
    website: 'https://www.encompassinsurance.com/',
    hours: '24 Hours Claim Reporting',
    phone: '800-588-7400',
  },
  {
    name: 'Liberty Insurance',
    logo: '/images/companies/liberty.webp',
    website: 'https://www.libertymutual.com/',
    hours: '24 Hours Claim Reporting',
    phone: '800-225-2467',
  },
];

export default function ClaimsReporting() {
  return (
    <div className="panel">
      <div className="panel-heading">
        <div className="panel-heading-style">Claims Reporting</div>
        <div className="panel-subheading-style">Contact your insurance carrier directly to report a claim</div>
      </div>
      <div className="panel-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {claimReporters.map((reporter, index) => (
            <div
              key={index}
              className="flex items-center gap-5 p-5 bg-white border border-gray-200 rounded-xl hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-blue-500"
            >
              <a
                href={reporter.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 no-underline"
                title={reporter.name}
              >
                <img
                  className="w-28 h-16 object-contain"
                  src={reporter.logo}
                  alt={reporter.name}
                />
              </a>
              <div className="min-w-0">
                <div className="font-bold text-slate-800 text-base truncate dark:text-gray-100">{reporter.name}</div>
                <div className="text-gray-500 text-xs mt-0.5 dark:text-gray-400">{reporter.hours}</div>
                <a
                  href={`tel:${reporter.phone}`}
                  className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm mt-2 hover:text-blue-800 transition-colors no-underline"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {reporter.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
