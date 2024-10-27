import { useTranslation } from "react-i18next";
import { PageWrapper } from "../design-systems/PageWrapper";
import { Button } from "../design-systems/Button";
import { Link } from "react-router-dom";

const BoxBanner = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <section className="flex flex-col items-center md:py-20">
        <div className="space-y-6 text-center pb-12">
          <h1 className="text-4xl font-medium text-brown-primary">
            {t("banner.boxBanner.title")}
          </h1>

          <Link to="/products">
            <Button size="lg" className="mt-12 py-6 px-12 text-center">
              {t("button.buyFoodBoxes")}
            </Button>
          </Link>
        </div>
        <img
          alt="img-box"
          src="https://odontwrrnfqnrvcdeypb.supabase.co/storage/v1/object/sign/product-images/foodbox.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9mb29kYm94LnBuZyIsImlhdCI6MTcyOTQzNzU1OSwiZXhwIjoxNzYwOTczNTU5fQ.mFaBmwu5lGojQzbiF6dSxGoiSd_zje0K6_kNHkx3_Fw&t=2024-10-20T15%3A19%3A20.007Z"
          className="w-80"
        />
      </section>
    </PageWrapper>
  );
};

export default BoxBanner;
