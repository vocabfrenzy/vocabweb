import { Check } from "lucide-react";

export default function About() {
  const achievements = [
    "Privacy-First Approach",
    "User-Centered Design", 
    "Educational Innovation"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About the <span className="bg-gradient-orange bg-clip-text text-transparent">Developer</span>
          </h2>
          <p className="text-xl text-gray-600">
            Passionate about making language learning accessible and fun for everyone.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
                alt="Loai Aldaghma - Developer"
                className="w-32 h-32 rounded-full object-cover shadow-lg"
                data-testid="developer-image"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="developer-name">
                Loai Aldaghma
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed" data-testid="developer-description">
                A passionate developer dedicated to creating educational apps that make learning engaging and accessible. 
                With a focus on privacy and user experience, Loai builds apps that learners love to use.
              </p>
              <div className="flex flex-col lg:flex-row gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="inline-flex items-center text-gray-700" data-testid={`achievement-${index}`}>
                    <Check className="text-green-500 mr-2 w-5 h-5" />
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
