import { Link } from "wouter";

export default function Footer() {
  const footerLinks = [
    {
      text: "Support",
      href: "/support",
      internal: true
    },
    {
      text: "Privacy", 
      href: "/privacy",
      internal: true
    },
    {
      text: "App Store",
      href: "https://apps.apple.com/ca/app/vocab-frenzy-fr/id6747328745",
      internal: false
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 lg:mb-0">
            <div className="w-10 h-10 bg-gradient-orange rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">🧠</span>
            </div>
            <span className="text-xl font-bold">Vocab Frenzy Fr</span>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
            <div className="text-gray-400 text-sm" data-testid="footer-copyright">
              © 2025 Frenzy-Vocab. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {footerLinks.map((link, index) => (
                link.internal ? (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    data-testid={`footer-link-${index}`}
                  >
                    {link.text}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    data-testid={`footer-link-${index}`}
                  >
                    {link.text}
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p data-testid="footer-tagline">
            Learn French the fun way with competitive vocabulary games and real-time challenges.
          </p>
        </div>
      </div>
    </footer>
  );
}
