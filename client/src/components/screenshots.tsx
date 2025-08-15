import { Smartphone, Tablet, Music, Laptop, Eye } from "lucide-react";

export default function Screenshots() {
  const screenshots = [
    {
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
      title: "Interactive Learning",
      description: "Fast-paced vocabulary challenges with beautiful, intuitive interface."
    },
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600", 
      title: "Real-Time Battles",
      description: "Challenge friends and compete in real-time vocabulary battles."
    },
    {
      src: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
      title: "Global Rankings", 
      description: "Track your progress and compete with players worldwide."
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
    },
    {
      icon: <Music className="text-2xl" />,
      name: "iPod Touch",
      requirement: "iOS 15.1+", 
      bgColor: "bg-gradient-blue"
    },
    {
      icon: <Laptop className="text-2xl" />,
      name: "Mac",
      requirement: "macOS 12.0+ (M1)",
      bgColor: "bg-gradient-green"
    },
    {
      icon: <Eye className="text-2xl" />,
      name: "Vision Pro", 
      requirement: "visionOS 1.0+",
      bgColor: "bg-gradient-pink"
    }
  ];

  return (
    <section id="screenshots" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            See It In <span className="bg-gradient-purple bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a preview of the beautiful interface and engaging gameplay that makes learning French addictive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-testid={`screenshot-${index}`}
            >
              <img
                src={screenshot.src}
                alt={screenshot.title}
                className="w-full h-80 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{screenshot.title}</h3>
              <p className="text-gray-600">{screenshot.description}</p>
            </div>
          ))}
        </div>

        {/* Compatibility Information */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Device Compatibility</h3>
          <div className="grid md:grid-cols-5 gap-6 text-center">
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
