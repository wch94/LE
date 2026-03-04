const commercial = [
  'Property',
  'General Liability',
  'Umbrella',
  "Worker's Compensation",
  'Business Income',
  'Business Auto',
  'Crime (Fidelity)',
  "Garage Keeper's Liability",
  "Builder's Risk",
  'Commercial Bonding',
  'Directors and Officers Liability',
  'Fiduciary Liability',
  'Cyber Liability',
  'Environmental Liability',
  'Products Liability',
  'Foreign Products Liability',
  'Professional Liability',
];

const personal = [
  'Homeowners',
  'Automobile',
  'Umbrella Liability',
  'Boats',
  "Motorcycles - ATV's",
  'Renters Insurance',
  'Personal Inland Marine',
  'Builders Risk for New Construction',
  'Flood - Earthquake',
  'Rental Properties',
];

function CoverageList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1">
      {items.map((item, i) => (
        <li key={i} className="coverage-item">
          <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Coverage() {
  return (
    <div className="panel">
      <div className="panel-heading">
        <div className="panel-heading-style">Types of Coverage</div>
        <div className="panel-subheading-style">Comprehensive protection for businesses and individuals</div>
      </div>
      <div className="panel-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center dark:bg-blue-900/40">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-gray-100">Commercial Insurance</h2>
            </div>
            <CoverageList items={commercial} />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center dark:bg-blue-900/40">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-gray-100">Personal</h2>
            </div>
            <CoverageList items={personal} />
          </div>
        </div>
      </div>
    </div>
  );
}
