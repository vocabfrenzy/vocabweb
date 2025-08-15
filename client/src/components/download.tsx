export default function Download() {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-orange-500 via-purple-500 to-blue-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          Ready to Master French?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of learners who've made French vocabulary fun and competitive. Download now and start your journey!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a
            href="https://apps.apple.com/ca/app/vocab-frenzy-fr/id6747328745"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            data-testid="download-app-store-btn"
          >
            <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on App Store
          </a>
          <div className="text-white/80 text-lg" data-testid="download-info">
            <div className="font-semibold">100% Free</div>
            <div className="text-sm">No Ads • No In-App Purchases</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className="text-center" data-testid="download-stat-size">
            <div className="text-3xl font-bold mb-2">43.1 MB</div>
            <div className="text-white/80">Lightweight Download</div>
          </div>
          <div className="text-center" data-testid="download-stat-age">
            <div className="text-3xl font-bold mb-2">12+</div>
            <div className="text-white/80">Age Rating</div>
          </div>
          <div className="text-center" data-testid="download-stat-language">
            <div className="text-3xl font-bold mb-2">English</div>
            <div className="text-white/80">Interface Language</div>
          </div>
        </div>
      </div>
    </section>
  );
}
