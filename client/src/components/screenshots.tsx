import { Smartphone, Tablet } from "lucide-react";
import screenshot1 from "@/images/1.png";
import screenshot2 from "@/images/2.png";
import screenshot3 from "@/images/3.png";
import screenshot4 from "@/images/4.png";

export default function Screenshots() {
  const screenshots = [
    {
      src: screenshot1,
      title: "Vocabulary Learning",
      description: "Learn French words with interactive flashcards and engaging gameplay."
    },
    {
      src: screenshot2,
      title: "Real-Time Challenges", 
      description: "Challenge friends and compete in fast-paced vocabulary battles."
    },
    {
      src: screenshot3,
      title: "Progress Tracking",
      description: "Track your learning progress and see your vocabulary growth."
    },
    {
      src: screenshot4,
      title: "Game Interface", 
      description: "Beautiful, intuitive interface designed for effective learning."
    }
  ];

  const compatibilityDevices = [
    {
      icon: <Smartphone className="text-2xl" />,
      name: "iPhone",
      requirement: "iOS 15.1+",
      bgColor: "bg-gradient-orange"
    },
    {
      icon: <Tablet className="text-2xl" />,
      name: "iPad", 
      requirement: "iPadOS 15.1+",
      bgColor: "bg-gradient-purple"
    }
  ];

  return (
    <section id="screenshots" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            See It In <span className="text-purple-custom">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a preview of the beautiful interface and engaging gameplay that makes learning French addictive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-testid={`screenshot-${index}`}
            >
              <div className="aspect-[9/19.5] mb-4 bg-gray-50 rounded-2xl overflow-hidden">
                <img
                  src={screenshot.src}
                  alt={screenshot.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{screenshot.title}</h3>
              <p className="text-sm text-gray-600">{screenshot.description}</p>
            </div>
          ))}
        </div>

        {/* Compatibility Information */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Device Compatibility</h3>
          <div className="grid md:grid-cols-2 gap-6 text-center justify-center max-w-lg mx-auto">
            {compatibilityDevices.map((device, index) => (
              <div key={index} className="flex flex-col items-center" data-testid={`device-${index}`}>
                <div className={`w-16 h-16 ${device.bgColor} rounded-2xl flex items-center justify-center mb-3 text-white`}>
                  {device.icon}
                </div>
                <div className="font-semibold text-gray-900">{device.name}</div>
                <div className="text-sm text-gray-600">{device.requirement}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
