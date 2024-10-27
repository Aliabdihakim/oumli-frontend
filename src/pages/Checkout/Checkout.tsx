import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import axios from "axios";
import getEnvConfig from "@/config";

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || ""
);

const Checkout = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { apiUrl } = getEnvConfig();

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

  return (
    <div className="checkout-page">
      <button onClick={handleCheckout} className="checkout-button">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Checkout;
