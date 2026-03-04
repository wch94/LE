export default function Newsletter() {
  return (
    <div className="panel">
      <div className="panel-heading">
        <div className="panel-heading-style">Insurance Newsletter</div>
        <div className="panel-subheading-style">Stay up to date with the latest from L&amp;E</div>
      </div>
      <div className="panel-body">
        <div className="flex justify-center">
          <img
            src="/images/newsletter/newsletter-current.jpg"
            alt="Current Newsletter"
            className="max-w-full h-auto rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 dark:border-gray-700"
          />
        </div>
      </div>
    </div>
  );
}
