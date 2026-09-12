const Footer = () => {
  return (
    <footer className="container mx-auto border-t border-gray-100 px-4 py-12 md:px-8">
      <div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand block */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-brand-start via-brand-mid to-brand-end flex items-center justify-center text-white font-bold text-sm">
                DS
              </div>
              <span className="text-lg font-bold">
                Dev <span className="text-brand-mid">Stack</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-4 flex gap-4 text-sm text-gray-600">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold tracking-wide text-gray-400">
              PRODUCT
            </h4>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Technologies</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-wide text-gray-400">
              COMPANY
            </h4>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold tracking-wide text-gray-400">
              LEGAL
            </h4>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-gray-100 pt-6 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
