import { PageWrapper } from "../design-systems/PageWrapper";
import LogoIcon from "@/assets/icons/logo";
import { List, ShoppingCart, User } from "phosphor-react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import Popover from "../design-systems/Popover/Popover";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const navLinks = [
    { name: t("main.foodBoxes"), path: "/products" },
    { name: t("main.giftCard"), path: "/gift-cards" },
    // { name: t("main.aboutUs"), path: "/about-us" },
    { name: t("main.faq"), path: "/faq" },
  ];

  return (
    <PageWrapper>
      <section className="flex items-center gap-8 justify-between">
        <Popover
          trigger={
            <List size={32} weight="bold" className="text-brown-secondary" />
          }
          className="md:hidden"
        >
          <ul className="space-y-4 px-4 py-2">
            {navLinks.map((link, index) => (
              <li key={index} className="font-medium text-primary">
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </Popover>

        <div className="flex items-center gap-2">
          <Link to="/">
            <h1 className="text-5xl md:text-6xl font-bold text-brown-light tracking-tighter">
              {t("main.oumli")}
            </h1>
          </Link>
          <LogoIcon size={40} className="text-brown-light" />
        </div>

        <div className="flex items-center gap-8 lg:gap-20">
          <div className="items-center gap-4 hidden md:flex lg:gap-8">
            {navLinks.map((link, index) => (
              <span key={index} className="font-medium text-primary">
                <Link to={link.path}>{link.name}</Link>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="relative py-3 pr-2">
              {!!totalItems && (
                <span className="absolute top-0 right-0 bg-brown-secondary rounded-full font-semibold text-white text-xs p-1 w-5 h-5 flex justify-center items-center">
                  {totalItems}
                </span>
              )}
              <Link to="/cart">
                <ShoppingCart
                  size={isMobile ? 24 : 32}
                  weight="bold"
                  className="text-brown-secondary"
                />
              </Link>
            </div>
            <Link to="/profile">
              <User
                size={isMobile ? 24 : 32}
                weight="bold"
                className="text-brown-secondary"
              />
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Navbar;
