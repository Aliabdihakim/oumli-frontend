import { Description } from "@/components/design-systems/Description";
import { PageWrapper } from "@/components/design-systems/PageWrapper";
import { RootState } from "@/redux/store";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import CartItem from "./components/CartItem";
import getEnvConfig from "@/config";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { Button } from "@/components/design-systems/Button";
import { useForm } from "react-hook-form";

type PromoFormInputs = {
  promoCode: string;
};

const Cart = () => {
  const { t } = useTranslation();
  const { apiUrl } = getEnvConfig();

  const stripePromise = loadStripe(
    import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || ""
  );

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<PromoFormInputs>();

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    try {
      const response = await axios.post(
        `${apiUrl}/checkout/create-checkout-session`,
        { cartItems }
      );

      const sessionId = response.data.id;
      await stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  const applyPromoCode = (data: PromoFormInputs) => {
    const { promoCode } = data;
    if (promoCode !== "DISCOUNT10OUMLI") {
      setError("promoCode", {
        type: "manual",
        message: "Invalid promo code. Please try again.",
      });
    }
  };

  return (
    <div className="bg-light-brown h-screen md:h-full">
      <PageWrapper>
        <Description
          title={<h1 className="text-4xl font-bold">{t("cart.cart")}</h1>}
          description={
            <p className="text-lg font-medium">
              {t("cart.numberOfItems", { count: totalItems })}
            </p>
          }
          gap={1}
        />
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="bg-white rounded-3xl shadow-md mt-12 py-12 px-8 w-full lg:w-3/4">
            {cartItems.map((item, index) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                image={item.image}
                isLastItem={index === cartItems.length - 1}
              />
            ))}
          </div>
          <div className="bg-white rounded-3xl shadow-md min-w-64 justify-between w-full lg:w-1/4 mt-12 px-8 py-12">
            <div className="border-b-4 border-gray-200 py-4">
              <div className="pb-8">
                <Description
                  title={
                    <h1 className="text-center">{t("main.totalPrice")}:</h1>
                  }
                  description={
                    <h1 className="text-center text-2xl font-semibold">
                      {totalPrice}
                    </h1>
                  }
                  gap={4}
                />
              </div>
              <Button
                onClick={handleCheckout}
                variant="secondary"
                className="w-full"
              >
                {t("main.toCheckout")}
              </Button>
            </div>
            <div className="mt-8">
              <form
                onSubmit={handleSubmit(applyPromoCode)}
                className="flex items-center gap-2"
              >
                <input
                  {...register("promoCode")}
                  type="text"
                  placeholder={t("main.promoCode")}
                  className="w-full border rounded-md p-2"
                />
                <Button variant="secondary">{t("main.apply")}</Button>
              </form>
              {errors.promoCode && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.promoCode.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default Cart;
