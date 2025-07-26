import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      {/* Introductory Paragraphs */}
      <section className="space-y-6 mb-10">
        <p>
          At Vastrum, we value your trust and are committed to protecting your personal data and privacy. This policy explains how we collect, use, share, and protect your information.
        </p>
        <p>
          By accessing our website or using our services, you consent to the terms outlined in this Privacy Policy. We encourage you to review this policy regularly to stay informed.
        </p>
        <p>
          We collect only relevant and necessary information to provide better shopping experiences, optimize performance, and improve customer service.
        </p>
        <p>
          We implement strict security measures and use industry-standard technologies to safeguard your data from unauthorized access, disclosure, or misuse.
        </p>
        <p>
          This policy applies to all Vastrum customers, regardless of how you access our platform—via desktop, mobile, or third-party integrations.
        </p>
      </section>

      {/* Data Usage Details */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Information We Collect & How It's Used</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>Full name, shipping address, and contact number for order processing.</li>
          <li>Email address for account setup, order updates, and promotional communication.</li>
          <li>Payment details for completing transactions securely via authorized providers.</li>
          <li>Browsing activity and preferences for personalized product recommendations.</li>
          <li>Cookies and tracking technologies to understand user behavior and improve site performance.</li>
          <li>Device and browser information to ensure compatibility and load optimization.</li>
          <li>IP address for fraud prevention, geolocation, and session security.</li>
          <li>Interaction data such as reviews, ratings, and support queries.</li>
          <li>Marketing preferences to tailor newsletters and promotional content.</li>
          <li>Third-party login credentials, if you choose to connect via platforms like Google or Facebook.</li>
          <li>Data retention follows legal standards—information is not held longer than necessary.</li>
          <li>We may share limited data with logistics, payment, and analytics partners.</li>
          <li>You can request access, correction, or deletion of your personal information anytime.</li>
          <li>Children under 13 are not permitted to register or make purchases without parental consent.</li>
          <li>This policy is governed by Indian law and subject to local data protection regulations.</li>
        </ul>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
