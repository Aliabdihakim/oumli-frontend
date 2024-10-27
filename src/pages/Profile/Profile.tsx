import useGetUserDetails from "@/api/user/user";
import { Description } from "@/components/design-systems/Description";
import { PageWrapper } from "@/components/design-systems/PageWrapper";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useGetUserDetails();

  console.log({ data });

  return (
    <div className="bg-light-brown h-screen md:h-full">
      <PageWrapper>
        <Description
          title={<h1 className="text-4xl font-bold">{t("cart.cart")}</h1>}
          description={
            <p className="text-lg font-medium">
              {t("cart.numberOfItems", { count: 1 })}
            </p>
          }
          gap={1}
        />
      </PageWrapper>
    </div>
  );
};

export default Profile;
