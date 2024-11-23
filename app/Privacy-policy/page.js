/** @format */

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Privacy Policy</h1>
      <p className="text-center text-muted-foreground mb-8">
        <strong>Effective Date: [Insert Date]</strong>
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          At Sharpbook, we value your privacy. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your personal information
          when you visit our website, make a purchase, or interact with our
          services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          2. Information We Collect
        </h2>
        <p>We collect the following types of information:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Personal Information:</strong> Name, email address, payment
            information.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you use the
            website, such as IP address, browser type, pages viewed, etc.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          3. How We Use Your Information
        </h2>
        <p>The information we collect is used for the following purposes:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>To process your orders and deliver products.</li>
          <li>To improve our website and customer service.</li>
          <li>To send promotional emails, if you have opted in.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
        <p>
          We implement various security measures to protect your personal
          information. However, please note that no method of transmitting or
          storing data is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          5. Sharing Your Information
        </h2>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. However, we may share your information with trusted partners
          to perform certain functions, such as payment processing or product
          delivery.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal
          information. If you wish to exercise these rights, please contact us
          at{" "}
          <a href="mailto:support@sharpbook.store" className="text-blue-500">
            support@sharpbook.store
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          7. Changes to this Privacy Policy
        </h2>
        <p>
          We may update our Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p>
          <strong>Sharpbook.store</strong>
          <br />
          Email:{" "}
          <a href="mailto:support@sharpbook.store" className="text-blue-500">
            support@sharpbook.store
          </a>
          <br />
          Website:{" "}
          <a href="https://sharpbook.store" className="text-blue-500">
            sharpbook.store
          </a>
        </p>
      </section>
    </div>
  );
}
