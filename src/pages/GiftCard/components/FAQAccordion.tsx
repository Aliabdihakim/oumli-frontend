import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const FAQAccordion = () => {
  const { t } = useTranslation();

  return (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl text-left">
          {t("giftCard.faq.q1")}
        </AccordionTrigger>
        <AccordionContent className="text-xl text-left">
          {t("giftCard.faq.a1")}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-xl text-left">
          {t("giftCard.faq.q2")}
        </AccordionTrigger>
        <AccordionContent className="text-xl text-left">
          {t("giftCard.faq.a2")}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-xl text-left">
          {t("giftCard.faq.q3")}
        </AccordionTrigger>
        <AccordionContent className="text-xl text-left">
          {t("giftCard.faq.a3")}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQAccordion;
