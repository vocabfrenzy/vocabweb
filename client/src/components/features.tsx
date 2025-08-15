import { Zap, Trophy, Gamepad2, BookOpen, Shield, Bolt } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap className="text-2xl" />,
      title: "Real-Time Challenges",
      description: "Challenge your friends in real-time matches and see who masters French vocabulary faster!",
      highlight: "Fast • Competitive • Addictive",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconBg: "bg-gradient-orange"
    },
    {
      icon: <Trophy className="text-2xl" />,
      title: "Global Leaderboard", 
      description: "Climb the global leaderboard and show off your French skills to players worldwide.",
      highlight: "Compete • Excel • Dominate",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconBg: "bg-gradient-purple"
    },
    {
      icon: <Gamepad2 className="text-2xl" />,
      title: "Engaging Mini-Games",
      description: "Play mini-games designed to boost your memory and speed while learning French vocabulary.",
      highlight: "Fun • Educational • Effective", 
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconBg: "bg-gradient-blue"
    },
    {
      icon: <BookOpen className="text-2xl" />,
      title: "Practical Vocabulary",
      description: "Learn words you'll actually use – from beginner to advanced levels, all in context.",
      highlight: "Practical • Contextual • Progressive",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      iconBg: "bg-gradient-green"
    },
    {
      icon: <Shield className="text-2xl" />,
      title: "Privacy First",
      description: "No data collection, no ads, no in-app purchases. Just pure learning fun!",
      highlight: "Secure • Private • Ad-Free",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100", 
      iconBg: "bg-gradient-pink"
    },
    {
      icon: <Bolt className="text-2xl" />,
      title: "Lightning Fast",
      description: "Optimized for speed and performance across all Apple devices. Learn anywhere, anytime.",
      highlight: "Fast • Smooth • Responsive",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      iconBg: "bg-gradient-indigo"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-orange bg-clip-text text-transparent">Vocab Frenzy</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tired of boring flashcards? Say bonjour to Vocab Frenzy – the fast-paced, competitive way to master French vocabulary!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              data-testid={`feature-${index}`}
            >
              <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 text-white`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <div className="font-semibold text-sm" style={{ color: `var(--${feature.iconBg.split('-')[2]}-custom)` }}>
                {feature.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
