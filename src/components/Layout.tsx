import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Banner */}
      <div className="bg-white border-b border-gray-100 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <img src="/images/banner.png" alt="Lauterbach & Eilber" className="max-h-24 w-auto mx-auto block" />
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-700">

            {/* Regulatory links */}
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Regulatory</h4>
              <div className="flex flex-col gap-2.5">
                <a href="http://www.finra.org/" target="_blank" rel="noopener noreferrer"
                  className="btn btn-danger">FINRA</a>
                <a href="https://www.sipc.org/" target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary">SIPC</a>
                <a href="http://brokercheck.finra.org/" target="_blank" rel="noopener noreferrer"
                  className="btn btn-success">BrokerCheck</a>
              </div>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Contact Us</h4>
              <address className="not-italic space-y-1 text-slate-400 text-sm leading-relaxed">
                <div>1721 Bethel Road</div>
                <div>Columbus, OH 43220-0285</div>
                <div className="pt-2">
                  <a href="tel:+16144596500" className="text-slate-300 hover:text-white transition-colors">
                    (614) 459-6500
                  </a>
                </div>
                <div className="text-slate-500">Fax: (614) 459-6568</div>
              </address>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/claims-reporting" className="text-slate-400 hover:text-white transition-colors no-underline">Claims Reporting</Link>
                <Link to="/newsletter" className="text-slate-400 hover:text-white transition-colors no-underline">Newsletter</Link>
                <Link to="/our-team" className="text-slate-400 hover:text-white transition-colors no-underline">Our Team</Link>
                <Link to="/coverage" className="text-slate-400 hover:text-white transition-colors no-underline">Coverage</Link>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-6 text-xs text-slate-500 leading-relaxed space-y-2">
            <p>
              Securities offered through Registered Representatives of Cambridge Investment Research, Inc., a Broker/Dealer, Member FINRA/SIPC.
              Financial Professionals may only conduct business with residents of the states or jurisdictions in which they are properly registered, licensed or exempt from registration and not all of the securities, products and services mentioned are available in every state or jurisdiction.
            </p>
            <p>Investment Advisory Services offered through Cambridge Investment Research Advisors, Inc., a Registered Investment Advisor.</p>
            <p>Cambridge and Lauterbach and Eilber are not affiliated.</p>
            <p>
              Tom Wright and Todd Weithman are Registered Representatives of Cambridge Investment Research, Inc., and Investment Advisor Representatives of{' '}
              <a
                href="https://www.joincambridge.com/content/dam/joincambridge-v4/documents/CIR_Form_CRS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white underline transition-colors"
              >
                Cambridge Investment Research Advisors, Inc.
              </a>
            </p>
            <p className="pt-2 text-slate-600">
              &copy; {new Date().getFullYear()} Lauterbach &amp; Eilber. Serving Columbus since 1868.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
