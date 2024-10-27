import { useTranslation } from "react-i18next";
import { PageWrapper } from "../design-systems/PageWrapper";
import { Description } from "../design-systems/Description";
import { Button } from "../design-systems/Button";
import { Link } from "react-router-dom";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper className="mb-0">
      <section className="flex items-center gap-10 ">
        <div className="flex flex-col items-start gap-10 max-md:py-10">
          <Description
            title={
              <h1 className="text-6xl font-bold text-primary">
                {t("hero.header")}
              </h1>
            }
            description={
              <p className="text-2xl text-secondary">{t("hero.text")}</p>
            }
            gap={4}
          />
          <div className="flex gap-2">
            <Link to="/products">
              <Button variant="secondary" size="lg">
                {t("button.buyFoodBoxes")}
              </Button>
            </Link>
            <Link to="/gift-cards">
              <Button variant="white" size="lg">
                {t("main.giftCard")}
              </Button>
            </Link>
          </div>
        </div>
        <img
          alt="hero-img"
          className="max-md:hidden md:w-80 lg:w-[500px]"
          src="https://odontwrrnfqnrvcdeypb.supabase.co/storage/v1/object/sign/product-images/mom.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9tb20ucG5nIiwiaWF0IjoxNzI4ODUyMzYwLCJleHAiOjE3NjAzODgzNjB9.OovHaABcxYocfS4vs8zKDmVa45yyPkjQhug90a8KO50&t=2024-10-13T20%3A46%3A00.227Z"
        />
      </section>
    </PageWrapper>
  );
};
