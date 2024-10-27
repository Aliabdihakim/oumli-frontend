import { PageWrapper } from "../design-systems/PageWrapper";
import { Link } from "react-router-dom";
import LogoIcon from "@/assets/icons/logo";
import { useTranslation } from "react-i18next";
import { Description } from "../design-systems/Description";

const Footer = () => {
  const { t } = useTranslation();

  const navLinks = [
    { name: t("main.foodBoxes"), path: "/products" },
    { name: t("main.giftCard"), path: "/gift-cards" },
    { name: t("main.aboutUs"), path: "/about-us" },
    { name: t("main.faq"), path: "/faq" },
  ];

  return (
    <PageWrapper>
      <section className="grid grid-cols-1 gap-12 md:grid-cols-4">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-5xl md:text-6xl font-bold text-brown-light tracking-tighter">
              {t("main.oumli")}
            </h1>
            <LogoIcon size={40} className="text-brown-light" />
          </div>
          <p>{`${t("main.copyright")} 2024 ${t("main.oumli")}`}</p>
        </div>
        <div className="space-y-20 col-span-2">
          <Description
            title={<h1 className="text-xl font-bold"> {t("main.oumli")}</h1>}
            description={
              <p className="text-base font-normal">{t("footer.description")}</p>
            }
            gap={6}
          />
          <div>
            <Description
              title={
                <h1 className="text-xl font-bold"> {t("main.contact")}</h1>
              }
              description={
                <p className="text-base font-normal underline">
                  {t("main.oumli.email")}
                </p>
              }
              gap={6}
            />
          </div>
        </div>
        <div className="">
          <Description
            title={<h1 className="text-xl font-bold"> {t("main.menu")}</h1>}
            description={
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <p key={index} className="text-base font-normal flex">
                    <Link to={link.path}>{link.name}</Link>
                  </p>
                ))}
              </div>
            }
            gap={6}
          />
        </div>
      </section>
    </PageWrapper>
  );
};

export default Footer;
