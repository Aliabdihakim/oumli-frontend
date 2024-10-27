import { useTranslation } from "react-i18next";
import { Description } from "../design-systems/Description";
import { PageWrapper } from "../design-systems/PageWrapper";

const FirstBanner = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageWrapper>
        <section>
          <div className="flex flex-col justify-between gap-16 py-16 md:gap-8 md:flex-row">
            <Description
              title={t("banner.freeDelivery").toLocaleUpperCase()}
              description={<p className="text-center">{t("banner.order")}</p>}
              className="text-center"
            />
            <Description
              title={`4,7 ☆ ${t("banner.trustpilot").toLocaleUpperCase()}`}
              description={<p className="text-center">{t("banner.reviews")}</p>}
              className="text-center"
            />
            <Description
              title="PENGARNA TILLBAKA"
              description={
                <p className="text-center">{t("banner.satisfaction")}</p>
              }
              className="text-center"
            />
          </div>
        </section>
      </PageWrapper>
    </>
  );
};

export default FirstBanner;
