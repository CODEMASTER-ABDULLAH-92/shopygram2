// components/about/LegalCompliance.tsx
import React from 'react';

export const LegalCompliance: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal & Compliance</h2>
      
      <div className="space-y-8">
        {/* Affiliate Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-yellow-800 mb-4 flex items-center">
            <span className="text-2xl mr-3">⚠️</span>
            Affiliate Disclosure
          </h3>
          <div className="text-yellow-700 space-y-3">
            <p>
              <strong>Transparency is our priority.</strong> ShopyGram participates in various affiliate marketing programs, which means we may earn commissions on purchases made through our links to retailer sites.
            </p>
            <p>
              <strong>How it works:</strong> When you click on an affiliate link and make a purchase, we may receive a small commission at no extra cost to you. These commissions help us maintain and improve our platform.
            </p>
            <p>
              <strong>Our promise:</strong> We never allow affiliate relationships to influence our content. Our reviews remain honest, unbiased, and focused on helping you make the best purchasing decisions.
            </p>
            <p className="font-semibold">
              All prices are subject to change and may vary from those shown on our site.
            </p>
          </div>
        </div>

        {/* Privacy & Terms */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy Commitment</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• We never sell your personal data to third parties</li>
              <li>• Transparent data collection practices</li>
              <li>• Secure encryption for all user data</li>
              <li>• Clear cookie and tracking policies</li>
              <li>• Easy opt-out options for marketing</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">User Rights</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Right to access your personal data</li>
              <li>• Right to request data deletion</li>
              <li>• Right to opt-out of data processing</li>
              <li>• Right to data portability</li>
              <li>• Clear dispute resolution process</li>
            </ul>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="bg-gray-50 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Compliance Standards</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white px-4 py-3 rounded-lg border border-gray-200">
              <div className="text-2xl mb-2">🔒</div>
              <p className="text-sm font-medium">GDPR Compliant</p>
            </div>
            <div className="bg-white px-4 py-3 rounded-lg border border-gray-200">
              <div className="text-2xl mb-2">📝</div>
              <p className="text-sm font-medium">FTC Guidelines</p>
            </div>
            <div className="bg-white px-4 py-3 rounded-lg border border-gray-200">
              <div className="text-2xl mb-2">🌐</div>
              <p className="text-sm font-medium">CCPA Ready</p>
            </div>
            <div className="bg-white px-4 py-3 rounded-lg border border-gray-200">
              <div className="text-2xl mb-2">✅</div>
              <p className="text-sm font-medium">SSL Secure</p>
            </div>
          </div>
        </div>

        {/* Contact Legal */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Legal Inquiries</h3>
          <p className="text-blue-700 mb-3">
            For legal questions or compliance concerns, please contact our legal team
          </p>
          <a 
            href="mailto:legal@shopygram.com" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            legal@shopygram.com
          </a>
        </div>
      </div>
    </div>
  );
};