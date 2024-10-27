import { Button } from "@/components/design-systems/Button";
import { Description } from "@/components/design-systems/Description";
import { PageWrapper } from "@/components/design-systems/PageWrapper";
import { useTranslation } from "react-i18next";
import FAQAccordion from "./components/FAQAccordion";

const GiftCard = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-light-brown">
      <PageWrapper>
        <section className="flex flex-col items-center pt-20">
          <div className="pb-16">
            <Description
              title={
                <h1 className="text-5xl  md:text-8xl text-center font-semibold text-brown-secondary">
                  {t("main.oumli")}
                </h1>
              }
              description={
                <h1 className="text-5xl md:text-8xl font-semibold">
                  {t("main.giftCard")}
                </h1>
              }
            />
          </div>
          <div>
            <Button
              variant="secondary"
              size="lg"
              textSize="2xl"
              className="py-6"
            >
              {t("main.buy")} {t("main.giftCard")}
            </Button>
          </div>
          <div>
            <div className="p-10">
              <img
                alt="gift-card-brown"
                src={"../../../public/img/gift-cards.png"}
                className="w-[800px]"
              />
            </div>
          </div>
          <div className="py-28 flex justify-center">
            <Description
              title={
                <h1 className="text-5xl md:text-5xl font-normal text-center">
                  {t("giftCard.perfectGift.title")}
                </h1>
              }
              description={
                <p className="text-xl mx-auto text-center max-w-[700px]">
                  {t("giftCard.perfectGift.text")}
                </p>
              }
              gap={6}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-screen-lg px-4 py-40">
            <div>
              <Description
                title={
                  <h1 className="text-5xl font-semibold">
                    {t("main.usualQuestions")}
                  </h1>
                }
              />
            </div>
            <div className="w-full px-4">
              <FAQAccordion />
            </div>
          </div>
        </section>
      </PageWrapper>
    </div>
  );
};

export default GiftCard;
