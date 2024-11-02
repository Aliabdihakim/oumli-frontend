import useGetUserDetails from "@/api/user/user";
import { Loading } from "@/components/design-systems/Loading";
import { useTranslation } from "react-i18next";

const UserInfo = () => {
  const { t } = useTranslation();
  const userDetaildQuery = useGetUserDetails();
  const userDetailData = userDetaildQuery.data;

  if (userDetaildQuery.isLoading) {
    return <Loading />;
  }

  if (userDetaildQuery.isError || !userDetailData) {
    return <p>{t("Error loading orders or products")}</p>;
  }

  const { orders } = userDetailData;

  console.log({ orders });

  return <div></div>;
};

export default UserInfo;
