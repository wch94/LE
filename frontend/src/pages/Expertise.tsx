const expertiseAreas = [
  'Non-Profit & Social Services',
  'Manufacturers',
  'Contractors',
  'School Districts',
  'Dentists',
  'Athletic Organizations and Facilities',
  'Fitness and Wellness',
  'Real Estate Owners/Property Managers',
  'Medical Facilities',
];

export default function Expertise() {
  return (
    <div className="panel">
      <div className="panel-heading">
        <div className="panel-heading-style">Industry Expertise</div>
        <div className="panel-subheading-style">While we serve a wide array of businesses, we offer particular expertise in these areas</div>
      </div>
      <div className="panel-body">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <ul className="space-y-2">
              {expertiseAreas.map((area, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group dark:hover:bg-gray-700"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-gray-700 text-sm font-medium group-hover:text-blue-700 transition-colors dark:text-gray-300 dark:group-hover:text-blue-400">{area}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <img
              className="w-full rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
              src="/images/expertise.png"
              alt="Industry expertise"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
