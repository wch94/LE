interface Section {
  title: string;
  body: string;
}

const sections: Section[] = [
  {
    title: 'Our History',
    body: 'In March 1868, John Lauterbach, a German immigrant, formed an agency to write fire insurance and help people in the growing Columbus community protect their hard-earned assets. Wesley Eilber joined the agency in 1886. Through the following 100 years, descendants of Lauterbach & Eilber managed the agency. Today the experienced staff of Lauterbach & Eilber carries on the tradition of excellence in serving the insurance needs of central Ohio.',
  },
  {
    title: 'Company Philosophy',
    body: 'Lauterbach & Eilber is one of the oldest, independent, full-service insurance and financial services agencies in Ohio. With over 150 years of experience serving central Ohio, Lauterbach & Eilber understands the significant responsibility of protecting businesses, individuals and families.\n\nOur clients depend on us for all types of insurance coverage including: commercial property, liability, crime, bonds, group medical, individual home-auto packages, life, annuities, disability, IRA products and financial planning.\n\nOnly the most responsive and professional businesses thrive for over a century. From the beginning, Lauterbach & Eilber has operated by these principles:',
  },
  {
    title: 'Personal Attention',
    body: "Our clients' insurance and financial planning needs are our top priority at Lauterbach & Eilber. We work with our clients to design programs that respond to their needs. Because we know that fast, straightforward processing of claims is important, a good deal of time is spent building a solid relationship between our clients and our staff.",
  },
  {
    title: 'A Highly Trained, Experienced Staff',
    body: 'The responsibility of providing protection for families and businesses demands the service of highly trained professionals. Our staff is constantly updating their knowledge of the insurance business through seminars, research and ongoing, formal education.',
  },
  {
    title: 'Long-Established Insurance Companies',
    body: 'As an independent agency, Lauterbach & Eilber represents many insurance companies. We select top-rated companies to provide our clients with the highest quality insurance products.',
  },
  {
    title: 'Stability and Flexibility',
    body: 'Our experienced staff helps our clients understand complex insurance and risk issues.',
  },
];

export default function About() {
  return (
    <div className="panel">
      <div className="panel-heading">
        <div className="panel-heading-style">About L&amp;E</div>
        <div className="panel-subheading-style">Serving central Ohio since 1868</div>
      </div>
      <div className="panel-body">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-7">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2 dark:text-gray-100">
                  <span className="inline-block w-1 h-5 bg-blue-600 rounded-full flex-shrink-0" />
                  {section.title}
                </h2>
                <div className="text-gray-600 leading-7 text-sm space-y-3 dark:text-gray-400">
                  {section.body.split('\n\n').map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="md:col-span-1">
            <img
              src="/images/about.png"
              className="w-full rounded-xl shadow-md border border-gray-100 sticky top-24 dark:border-gray-700"
              alt="About L&E"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
