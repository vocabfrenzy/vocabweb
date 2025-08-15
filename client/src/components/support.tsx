import { MessageCircle, Shield, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Support() {
  const quickFacts = [
    {
      title: "Free to Download",
      description: "Start learning immediately",
      color: "text-green-500"
    },
    {
      title: "Regular Updates", 
      description: "New features coming soon",
      color: "text-blue-500"
    },
    {
      title: "iOS Optimized",
      description: "Built for iPhone & iPad", 
      color: "text-purple-500"
    }
  ];

  return (
    <section id="support" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Need <span className="text-purple-custom">Help</span>?
          </h2>
          <p className="text-xl text-gray-600">
            We're here to support your French learning journey every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-orange rounded-2xl flex items-center justify-center mb-6">
              <MessageCircle className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">App Support</h3>
            <p className="text-gray-600 mb-6">
              Having trouble with the app? Get help with technical issues, gameplay questions, or feature requests.
            </p>
            <Link
              href="/support"
              className="inline-flex items-center text-orange-custom font-semibold hover:text-orange-600 transition-colors"
              data-testid="support-link"
            >
              Get Support
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-purple rounded-2xl flex items-center justify-center mb-6">
              <Shield className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h3>
            <p className="text-gray-600 mb-6">
              Learn about our privacy practices and how we handle user data in our French learning app.
            </p>
            <a
              href="https://vocab-frenzy.my.canva.site/vocab-frenzy/#privacy-policy"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-purple-custom font-semibold hover:text-purple-600 transition-colors"
              data-testid="privacy-link"
            >
              Read Privacy Policy
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {quickFacts.map((fact, index) => (
                <div key={index} data-testid={`quick-fact-${index}`}>
                  <div className={`${fact.color} font-bold`}>{fact.title}</div>
                  <div className="text-sm text-gray-600">{fact.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
