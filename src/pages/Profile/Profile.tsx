import { Description } from "@/components/design-systems/Description";
import { PageWrapper } from "@/components/design-systems/PageWrapper";
import clsx from "clsx";
import { Package } from "phosphor-react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";

const Profile = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const storedUser = JSON.parse(localStorage.getItem("user") || "null");
  console.log("Stored user from localStorage:", storedUser);

  return (
    <div className="bg-light-brown ">
      <PageWrapper className="flex min-h-[80vh]">
        <main className="mx-auto w-full">
          <Description
            title={
              <h1 className="text-4xl font-bold text-center">
                {t("login.welcomeBack", {
                  name: storedUser?.name || "User",
                })}
              </h1>
            }
            description={
              <div className="flex gap-12 justify-center">
                {/* <Link to="/profile/user">
                  <div className="flex flex-col items-center">
                    <User size={32} />
                    <p className="text-base font-medium">{t("Användarinfo")}</p>
                    <div
                      className={clsx(
                        "h-[3px] w-full",
                        location.pathname.includes("/profile/user")
                          ? "bg-brown-secondary"
                          : "bg-transparent"
                      )}
                    />
                  </div>
                </Link> */}
                <Link to="/profile/orders">
                  <div className="flex flex-col items-center">
                    <Package size={32} />
                    <p className="text-base font-medium">
                      {t("Beställningar")}
                    </p>
                    <div
                      className={clsx(
                        "h-[3px] w-full",
                        location.pathname.includes("/profile/orders")
                          ? "bg-brown-secondary"
                          : "bg-transparent"
                      )}
                    />
                  </div>
                </Link>
              </div>
            }
            gap={1}
            className="pb-12"
          />
          <Outlet />
        </main>
      </PageWrapper>
    </div>
  );
};

export default Profile;
