import { useTranslation } from "react-i18next";
import { Description } from "../design-systems/Description";
import { PageWrapper } from "../design-systems/PageWrapper";

const CollabBanner = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageWrapper>
        <section className="flex flex-col gap-10">
          <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
            <Description
              title={
                <h1 className="text-4xl font-medium max-md:text-center">
                  {t("banner.collab.first.title")}{" "}
                </h1>
              }
              description={
                <p className="text-xl max-md:text-center">
                  Oumli samarbetar med{" "}
                  <a className="underline underline-offset-1 italic">
                    {t("banner.yalla.rinkeby")}
                  </a>{" "}
                  ett arbetsintegrerat socialt initiativ med stora drömmar och
                  stark gemenskap som driver catering, konferensverksamhet och
                  café där vi serverar hemlagad mat av hög kvalitet.
                </p>
              }
              gap={6}
            />
            <img
              alt="img-yll"
              className="w-96 lg:w-[500px]"
              src="https://odontwrrnfqnrvcdeypb.supabase.co/storage/v1/object/sign/product-images/yalla.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy95YWxsYS5wbmciLCJpYXQiOjE3MjkxNzY2MDEsImV4cCI6MTc2MDcxMjYwMX0.2ShfDUVqC0B7quzY73Al-AlkNmzdxIONN28I5cMf1lM&t=2024-10-17T14%3A50%3A02.270Z"
            />
          </div>
          <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row-reverse">
            <Description
              title={
                <h1 className="text-4xl font-medium max-md:text-center">
                  {t("banner.collab.second.title")}
                </h1>
              }
              description={
                <p className="text-xl max-md:text-center">
                  {t("banner.collab.second.text")}
                </p>
              }
              gap={6}
            />
            <img
              alt="img-yll-2"
              className="w-96 lg:w-[500px]"
              src="https://odontwrrnfqnrvcdeypb.supabase.co/storage/v1/object/sign/product-images/yalla-mat.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy95YWxsYS1tYXQucG5nIiwiaWF0IjoxNzI5MTc3NDMyLCJleHAiOjE3NjA3MTM0MzJ9.WjTa5SR700bGBrMSNZ50fa2CSeCNYtu7Mz-P-WLICEY&t=2024-10-17T15%3A03%3A52.735Z"
            />
          </div>
        </section>
      </PageWrapper>
    </>
  );
};

export default CollabBanner;
