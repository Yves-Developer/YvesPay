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
              Once you purchase the ebook, you’ll get an immediate download link
              via email. You can access it anytime, anywhere.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold bg-gray-100 p-4 rounded-lg hover:bg-gray-200 focus:outline-none">
              What format is the ebook in?
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-50 border-l-4 rounded-b-lg">
              The ebook is in PDF format, making it compatible with all devices,
              including computers, tablets, and smartphones.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold bg-gray-100 p-4 rounded-lg hover:bg-gray-200 focus:outline-none">
              Can I get a refund if I’m not satisfied?
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-50 border-l-4 rounded-b-lg">
              Yes, we offer a 30-day money-back guarantee. If you're not
              satisfied for any reason, just contact us for a full refund.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-semibold bg-gray-100 p-4 rounded-lg hover:bg-gray-200 focus:outline-none">
              Is this ebook for beginners or experienced traders?
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-50 border-l-4 rounded-b-lg">
              This ebook is perfect for both beginners and experienced traders.
              We break down complex concepts into easy-to-understand steps.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
