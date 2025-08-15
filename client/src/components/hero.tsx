import appLogo from "@/images/Logo.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-orange-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-orange text-white rounded-full text-sm font-medium mb-6">
              🎮 Available on iOS
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Learn French the{" "}
              <span className="text-orange-custom">Fun Way!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Play mini-games, challenge friends, and climb the leaderboard with Vocab Frenzy. Fast, competitive, and addictive!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.apple.com/ca/app/vocab-frenzy-fr/id6747328745"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-orange text-white rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                data-testid="hero-download-btn"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </a>

            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="text-orange-custom font-semibold">⭐⭐⭐⭐⭐</span>
                <span className="ml-2">Featured App</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 font-semibold">✓</span>
                <span className="ml-2">Privacy Focused</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={appLogo}
              alt="Vocab Frenzy Fr App Logo"
              className="rounded-3xl shadow-2xl w-full max-w-md mx-auto h-auto transform rotate-3 hover:rotate-0 transition-transform duration-500"
              data-testid="hero-image"
            />
            <div className="absolute -top-4 -right-4 bg-gradient-purple text-white p-4 rounded-2xl shadow-lg"
              data-testid="hero-stat-words"
            >
              <div className="text-2xl font-bold">1M+</div>
              <div className="text-sm opacity-90">Words Learned</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-blue text-white p-4 rounded-2xl shadow-lg"
              data-testid="hero-stat-players"
            >
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-sm opacity-90">Active Players</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
