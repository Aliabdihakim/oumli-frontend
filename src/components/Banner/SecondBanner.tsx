import { useTranslation } from "react-i18next";
import { Description } from "../design-systems/Description";
import { PageWrapper } from "../design-systems/PageWrapper";

const SecondBanner = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageWrapper className="max-w-5xl">
        <div className="">
          <Description
            title={
              <h1 className="text-5xl font-medium text-brown-primary text-center">
                {t("banner.nutritiousMeals.title")}
              </h1>
            }
            description={
              <p className="text-xl text-center leading-8">
                {t("banner.nutritiousMeals.text")}
              </p>
            }
            gap={10}
          />
        </div>
      </PageWrapper>
    </>
  );
};

export default SecondBanner;
