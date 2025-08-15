import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Mail } from "lucide-react";

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-orange-custom">Vocab Frenzy</span> Support
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Please contact us at the email below for any questions or concerns...
            </p>
            
            <div className="bg-gradient-to-br from-orange-50 to-purple-50 p-8 rounded-3xl shadow-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-orange rounded-2xl flex items-center justify-center">
                  <Mail className="text-2xl text-white" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              
              <a 
                href="mailto:vocab.frenzy@outlook.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-orange text-white rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                data-testid="contact-email"
              >
                vocab.frenzy@outlook.com
              </a>
              
              <div className="mt-8 text-gray-600">
                <p className="mb-4">
                  We typically respond to emails within 24-48 hours. Please include as much detail as possible about your issue or question.
                </p>
                <p>
                  For technical issues, please include your device type (iPhone/iPad) and iOS version.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}