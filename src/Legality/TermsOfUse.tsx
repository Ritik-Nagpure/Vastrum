
const TermsOfUse: React.FC = () => {
  return (
    <main className=" px-6 py-12 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>

      <section className="space-y-6 mb-10">
        <p>
          Welcome to Vastrum, your trusted destination for fashion-forward clothing and lifestyle products. By accessing and using our website, you agree to comply with the terms outlined below. These terms govern your use of our services, products, and digital platforms.
        </p>
        <p>
          Our goal is to offer a safe, inclusive, and seamless shopping experience. These Terms of Use are designed to clarify your rights and responsibilities, outline acceptable practices, and protect both you and Vastrum.
        </p>
        <p>
          Please review these terms carefully before making purchases or engaging with our services. Your continued use of our platform signifies that you accept and will follow these terms.
        </p>
        <p>
          Vastrum reserves the right to update or modify these Terms of Use at any time. Changes will take effect immediately upon posting. It is your responsibility to periodically review this page for updates.
        </p>
        <p>
          If you do not agree to any part of these Terms, we recommend discontinuing use of our site. For questions or concerns, please contact us at <a href="mailto:support@vastrum.com" className="text-blue-600 hover:underline">support@vastrum.com</a>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">User Responsibilities & Conditions</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>You must be at least 18 years old to create an account or make purchases.</li>
          <li>All account information must be accurate and kept up to date.</li>
          <li>You may not use our site for fraudulent or unlawful purposes.</li>
          <li>Content on Vastrum is protected by copyright and may not be reproduced without permission.</li>
          <li>Pricing and availability may change without prior notice.</li>
          <li>Promotions and discounts are subject to specific terms and expiration dates.</li>
          <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          <li>Unauthorized access to other accounts is strictly prohibited.</li>
          <li>All purchases are subject to our shipping and return policies.</li>
          <li>Vastrum is not liable for third-party links or content accessed through our site.</li>
          <li>Site performance may vary based on browser, device, and internet connection.</li>
          <li>We reserve the right to suspend or terminate accounts violating these terms.</li>
          <li>Users may not upload harmful, defamatory, or illegal content.</li>
          <li>Limitation of liability applies for any damages resulting from site use.</li>
          <li>These terms are governed by and interpreted under the laws of India.</li>
        </ul>
      </section>
    </main>
  );
};

export default TermsOfUse;

