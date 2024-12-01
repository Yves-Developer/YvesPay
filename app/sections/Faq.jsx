/** @format */

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // Import the custom Accordion components

const Faq = () => {
  return (
    <section className="px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Accordion for FAQs */}
        <Accordion type="single" collapsible className="space-y-4">
          {/* FAQ Item 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold bg-gray-100 p-4 rounded-lg hover:bg-gray-200 focus:outline-none">
              How do I access the ebook?
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-50 border-l-4 rounded-b-lg">
              Once purchased, you will receive an immediate download link via email. Access the ebook anytime, anywhere, and start building modern web apps.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold bg-gray-100 p-4 rounded-lg hover:bg-gray-200 focus:outline-none">
              What format is the ebook in?
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-50 border-l-4 rounded-b-lg">
              The ebook is available in PDF format, ensuring compatibility across all devices like computers, tablets, and smartphones.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold bg-gray-100 p-4 rounded-lg hover:bg-gray-200 focus:outline-none">
              Can I get a refund if I’m not satisfied?
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-50 border-l-4 rounded-b-lg">
              Due to the nature of digital products, we do not offer refunds. Please ensure you're fully satisfied before purchasing.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-semibold bg-gray-100 p-4 rounded-lg hover:bg-gray-200 focus:outline-none">
              Is this ebook suitable for beginners or experienced learners?
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-50 border-l-4 rounded-b-lg">
              This ebook is ideal for both beginners and more advanced learners. We offer clear, actionable steps to help you master Next.js and build modern web apps.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

  );
};

export default Faq;
