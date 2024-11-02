import { Description } from "@/components/design-systems/Description";
import { PageWrapper } from "@/components/design-systems/PageWrapper";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQ = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-light-brown h-screen">
      <PageWrapper>
        <div className="pb-16">
          <Description
            title={
              <h1 className="text-5xl  md:text-6xl text-center font-medium text-brown-secondary">
                {t("FAQ")}
              </h1>
            }
            description={
              <h1 className="text-2xl text-center md:text-3xl font-medium">
                {t("Vanligaste frågorna")}
              </h1>
            }
          />
        </div>

        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl text-left">
              {t("faq.q1")}
            </AccordionTrigger>
            <AccordionContent className="text-xl text-left">
              {t("faq.a1")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl text-left">
              {t("faq.q2")}
            </AccordionTrigger>
            <AccordionContent className="text-xl text-left">
              {t("faq.a2")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl text-left">
              {t("faq.q3")}
            </AccordionTrigger>
            <AccordionContent className="text-xl text-left">
              {t("faq.a3")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl text-left">
              {t("faq.q4")}
            </AccordionTrigger>
            <AccordionContent className="text-xl text-left">
              {t("faq.a4")}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </PageWrapper>
    </div>
  );
};

export default FAQ;
