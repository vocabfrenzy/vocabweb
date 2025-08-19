import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Shield } from "lucide-react";
import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-purple rounded-2xl flex items-center justify-center">
                <Shield className="text-2xl text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Privacy <span className="text-purple-custom">Policy</span>
            </h1>
            <p className="text-lg text-gray-600">
              Effective Date: 15/07/2025
            </p>
            <p className="text-lg text-gray-600">
              App Name: Vocab Frenzy
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-8 rounded-3xl shadow-lg mb-8">
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy explains how Vocab Frenzy Fr ("we", "our", or "us") collects, uses, discloses, and protects your information when you use our mobile application available on the Apple App Store (the "App"). By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
                
                <div className="ml-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">a. Personal Information</h3>
                    <p className="text-gray-700">We may collect personal information that you provide directly, such as:</p>
                    <ul className="list-disc ml-6 mt-2 text-gray-700">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>User ID or account information</li>
                      <li>Payment information (processed securely via Apple)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">b. Automatically Collected Data</h3>
                    <p className="text-gray-700">When you use the App, we may automatically collect:</p>
                    <ul className="list-disc ml-6 mt-2 text-gray-700">
                      <li>Device information (model, OS version, unique device identifiers)</li>
                      <li>IP address</li>
                      <li>Usage data (screens visited, buttons clicked, time spent)</li>
                      <li>Crash and performance data</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">c. Third-Party Information</h3>
                    <p className="text-gray-700">If you sign in using a third-party service (e.g., Apple Sign-In), we may receive limited data (like your name and email) from them, in accordance with their privacy settings.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use the collected information to:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Provide and maintain the App</li>
                  <li>Improve performance and user experience</li>
                  <li>Respond to user requests and support tickets</li>
                  <li>Send important updates or notifications</li>
                  <li>Monitor usage trends and diagnose issues</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sharing Your Information</h2>
                <p className="text-gray-700 mb-4">We do not sell your personal data. We may share your information with:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Service Providers (e.g. cloud storage) who assist in app functionality</li>
                  <li>Apple for in-app purchase and account-related purposes</li>
                  <li>Legal Authorities when required by law or to protect rights and safety</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
                <p className="text-gray-700 mb-4">Our App may use third-party services, such as:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Firebase (authentication, database, crash reporting)</li>
                  <li>Google Analytics or similar tools</li>
                  <li>Apple APIs (e.g., Apple Sign-In, iCloud)</li>
                </ul>
                <p className="text-gray-700 mt-4">These services have their own privacy policies and data handling practices.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
                <p className="text-gray-700">We retain your information only for as long as necessary for the purposes set out in this policy, or as required by law.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Security</h2>
                <p className="text-gray-700">We implement industry-standard measures to protect your information. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
                <p className="text-gray-700 mb-4">Depending on your jurisdiction, you may have rights to:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Access, correct, or delete your personal data</li>
                  <li>Object to processing</li>
                  <li>Withdraw consent</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  You can contact us at <a href="mailto:vocab.frenzy@outlook.com" className="text-purple-custom hover:text-purple-600 font-semibold">vocab.frenzy@outlook.com</a> to exercise these rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
                <p className="text-gray-700">We do not knowingly collect data from children. If you believe we have inadvertently collected such data, please contact us.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
                <p className="text-gray-700">We may update this Privacy Policy from time to time. When we do, we will revise the "Effective Date" at the top. Significant changes will be communicated within the App or through other appropriate channels.</p>
              </section>

              <section className="bg-gradient-to-br from-orange-50 to-purple-50 p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                <p className="text-gray-700 mb-4">If you have questions or concerns about this Privacy Policy or our data practices, you can contact us at:</p>
                <p className="text-lg">
                  <strong>Email:</strong> <a href="mailto:vocab.frenzy@outlook.com" className="text-purple-custom hover:text-purple-600 font-semibold">vocab.frenzy@outlook.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}