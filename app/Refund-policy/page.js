/** @format */

export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Refund Policy</h1>
      <p className="text-center text-muted-foreground mb-8">
        <strong>Effective Date: [Insert Date]</strong>
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          1. No Refunds for Digital Products
        </h2>
        <p>
          Due to the nature of digital products, **Sharpbook** does not offer
          refunds or exchanges once a purchase has been completed.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Technical Issues</h2>
        <p>
          If you experience any technical issues with the product, such as
          corrupted files or problems with the download link, please contact us
          at{" "}
          <a href="mailto:info@sharpbook.store" className="text-blue-500">
            info@sharpbook.store
          </a>
          . We will work with you to resolve any technical issues as quickly as
          possible.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          3. Incorrect or Faulty Products
        </h2>
        <p>
          If you receive a product that is not as described or is faulty, please
          contact us within 14 days of purchase, and we will assist you in
          resolving the issue.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Contact Us</h2>
        <p>
          If you have any questions about our Refund Policy, please contact us
          at:
        </p>
        <p>
          <strong>Sharpbook.store</strong>
          <br />
          Email:{" "}
          <a href="mailto:info@sharpbook.store" className="text-blue-500">
            info@sharpbook.store
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
