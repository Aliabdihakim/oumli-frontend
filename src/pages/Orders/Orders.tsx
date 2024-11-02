import useGetProducts from "@/api/getProducts";
import useGetUserDetails from "@/api/user/user";
import { Loading } from "@/components/design-systems/Loading";
import { useTranslation } from "react-i18next";

const UserInfo = () => {
  const { t } = useTranslation();
  const userDetaildQuery = useGetUserDetails();
  const userDetailData = userDetaildQuery.data;

  const productsQuery = useGetProducts();
  const productsData = productsQuery.data;

  if (userDetaildQuery.isLoading || productsQuery.isLoading) {
    return <Loading />;
  }

  if (
    userDetaildQuery.isError ||
    !userDetailData ||
    productsQuery.isError ||
    !productsData
  ) {
    return <p>{t("Error loading orders or products")}</p>;
  }

  const { orders } = userDetailData;

  console.log({ orders });

  return (
    <div className="mt-8">
      {orders.length > 0 ? (
        orders.map((order) => {
          const calculatedTotal = order.order_items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );

          return (
            <div key={order.id} className="mb-6 py-12 bg-white p-8 rounded-2xl">
              <h3 className="text-xl font-semibold">
                {t("Order")} #{order.id} - {order.createdat?.slice(0, 10)}
              </h3>

              <ul className="my-12 space-y-14">
                {order.order_items.map((item) => {
                  const product = productsData.find(
                    (prod) => prod.id === item.productid
                  );
                  const totalPrice = item.price * item.quantity;
                  return (
                    <li
                      key={item.id}
                      className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center"
                    >
                      <div className="flex items-center gap-4 md:col-span-2">
                        {product && (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 object-cover"
                          />
                        )}
                        <div>
                          <p className="font-medium">
                            {product?.name || t("Unknown product")}
                          </p>
                        </div>
                      </div>
                      <p className="text-left md:text-center">
                        {t("Price")}: {item.price}{" "}
                        {order.currency?.toUpperCase()}
                      </p>
                      <p className="text-left md:text-center">
                        {t("Quantity")}: {item.quantity}
                      </p>
                      <p className="text-left md:text-center font-semibold">
                        {t("Total")}: {totalPrice}{" "}
                        {order.currency?.toUpperCase()}
                      </p>
                    </li>
                  );
                })}
              </ul>
              <div className="pt-4 text-lg font-bold">
                {t("Order Total")}: {calculatedTotal}{" "}
                {order.currency?.toUpperCase()}
              </div>
            </div>
          );
        })
      ) : (
        <p>{t("No orders found")}</p>
      )}
    </div>
  );
};

export default UserInfo;
