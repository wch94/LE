interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Ken Carey',
    title: 'CPCU, ARM',
    image: '/images/staff/ken.webp',
    bio: 'Ken has been with Lauterbach & Eilber since 1981. He is a Worthington High School graduate as well as a graduate from The Ohio State University with a degree in Risk Management and Insurance. Ken has attained the Chartered Property Casualty Underwriter, Associate in Risk Management, and Certified School Risk Manager designations.\n\nAmong his clients are public school districts, manufacturers, contractors, and real estate developers.\n\nKen and wife Patti have two sons, John and Kevin. In his spare time, he is a volunteer assistant basketball coach for the Worthington Kilbourne High School boys program, and is a member of the Dublin-Worthington Rotary Club and Worthington Hills Country Club.',
    email: 'kecarey@lepropcas.com'
  },
  {
    name: 'Tom Wright',
    title: 'CFP®',
    image: '/images/staff/tom.webp',
    bio: 'Tom began his financial planning career in 1984 and joined Lauterbach & Eilber in 1988, the same year he became a Certified Financial Planner™.\n\nHe is a 1982 graduate of Boston College where he played varsity ice hockey and lacrosse. He currently lives in Worthington with his wife Kelly, and they have two children.\nTom enjoys playing ice hockey, mountain biking, and fishing.',
    email: 'twright@cambridgesecure.com'
  },
  {
    name: 'Todd Weithman',
    title: 'CFP®',
    image: '/images/staff/todd.webp',
    bio: 'Todd was designated a Certified Financial Planner™ in 1999. He has been working for Lauterbach & Eilber since 1993.\n\nHe is a 1987 Graduate of Worthington High School and a 1991 Graduate of the Ohio State University with a degree in Business Administration. He played Basketball at Otterbein College for two years.\n\nTodd is a member of the Dublin/ Worthington Rotary club. He and his wife, Sheri, have three daughters, Lexie, Ava, and Sophia.',
    email: 'tweithman@cambridgesecure.com'
  },
  {
    name: 'Kim Michallow',
    title: '',
    image: '/images/staff/kim.webp',
    bio: 'Kim started her insurance career in 1978 in New York. She obtained her Ohio insurance license in 1981 and has worked at Lauterbach & Eilber since 1985. She is an agent in the commercial lines division working on all types of commercial exposures including manufacturing risks and schools districts.\n\nKim grew up in upstate New York and moved to Ohio in 1980 with her husband, Tom. They live in north Sunbury and have two sons.',
    email: 'kim@lepropcas.com'
  },
  {
    name: 'Deb McCarty',
    title: 'CIC',
    image: '/images/staff/deb.webp',
    bio: 'Deb entered the insurance industry in 1978, working as a Casualty Claims Processor for an Agri-business insurance company. She first began working as an independent insurance agent in 1983 and joined Lauterbach & Eilber in November 1989.\n\nShe received the Certified Insurance Counselor (CIC) designation in 1992 and has worked with several large franchise accounts.\n\nDeb primarily works with non-profit organizations, and recognizes the unique and challenging coverage issues inherent to those types of businesses.',
    email: 'deb@lepropcas.com'
  },
  {
    name: 'Kathleen Rice',
    title: '',
    image: '/images/staff/kathleen.webp',
    bio: 'Kathleen has been with Lauterbach and Eilber Insurance Agency since 1992.\n\nShe is a licensed Customer Service Agent who is responsible personal lines of insurance such as home, auto, and umbrella liability.\n\nKathleen is a Bishop Watterson graduate and a graduate of Franklin University. She resides in Northwest Columbus with her family.',
    email: 'kathleen@lepropcas.com'
  },
  {
    name: 'Jill Hess',
    title: '',
    image: '/images/staff/jill.webp',
    bio: "Jill has been Lauterbach & Eilber's accountant since December 1994. She is in charge of all accounting matters in regards to L&E.\n\nJill grew up in Upper Arlington and graduated from The Ohio State University with a B.S. in Accounting in 1985. She and her husband, Frank, have a daughter and two sons.",
    email: 'jill@lepropcas.com'
  },
  {
    name: 'Sheri Brethel',
    title: '',
    image: '/images/staff/sheri.webp',
    bio: 'Sheri has been with Lauterbach & Eilber since 2014. She is the administrative assistant to our Life, Health & Financial Planning department.\n\nSheri grew up in Clintonville, graduated from University of Cincinnati & Xavier University. She has lived in Upper Arlington since 1996 and has a son and daughter.',
    email: 'leadmin@cambridgesecure.com'
  },
  {
    name: 'Whitney Watts',
    title: '',
    image: '/images/staff/whitney.jpg',
    bio: '',
    email: 'whitney@lepropcas.com'
  }
];

export default function OurTeam() {
  return (
    <div className="panel">
      <div className="panel-heading">
        <div className="panel-heading-style">Meet the L&amp;E Team</div>
        <div className="panel-subheading-style">Experienced professionals serving central Ohio</div>
      </div>
      <div className="panel-body">
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          {teamMembers.map((member, index) => (
            <div key={index} className="py-8 first:pt-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1 flex flex-col items-center md:items-start gap-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 md:w-full md:h-auto object-cover rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
                  />
                  <div className="text-center md:text-left">
                    <div className="font-bold text-slate-800 text-base dark:text-gray-100">{member.name}</div>
                    {member.title && (
                      <div className="text-blue-600 text-sm font-medium">{member.title}</div>
                    )}
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 transition-colors mt-1.5"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {member.email}
                    </a>
                  </div>
                </div>
                <div className="md:col-span-3">
                  {member.bio ? (
                    <div className="text-gray-600 leading-7 text-sm space-y-3 dark:text-gray-400">
                      {member.bio.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm italic">Bio coming soon.</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
