import { Minus, Plus } from "phosphor-react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

type CartItemProps = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  isLastItem: boolean;
};

const CartItem = ({
  id,
  name,
  price,
  quantity,
  image,
  isLastItem,
}: CartItemProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      dispatch(decreaseQuantity(id));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  return isMobile ? (
    // Mobile Layout
    <div className="py-4">
      <div className="border-b-[1px] border-gray-100 pb-2 flex items-center gap-4">
        <h1 className="text-sm font-semibold text-brown-primary">
          {t("main.totalPrice")}: {price * quantity} {t("main.unit")}
        </h1>
      </div>
      <div className="flex gap-4 justify-between items-center">
        <div className="flex items-center gap-4">
          <img alt={`img-product-${id}`} src={image} className="w-28" />
          <div>
            <h1 className="text-base font-medium text-brown-primary">{name}</h1>
            <p className="text-md font-medium text-brown-primary">
              {price} {t("main.unit")}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <button
            onClick={() => dispatch(increaseQuantity(id))}
            className="p-2 bg-gray-200 rounded-full"
          >
            <Plus size={12} />
          </button>
          <h1 className="text-sm font-semibold text-brown-primary">
            {quantity}
          </h1>
          <button
            onClick={handleDecreaseQuantity}
            className="p-2 bg-gray-200 rounded-full"
          >
            <Minus size={12} />
          </button>
        </div>
      </div>
    </div>
  ) : (
    // Desktop Layout
    <div
      className={`grid grid-cols-6 gap-4 py-8 ${
        !isLastItem ? "border-b-4 border-light-brown" : ""
      }`}
    >
      <div className="col-span-3 flex items-center gap-3">
        <img alt={`img-${id}`} src={image} className="w-32" />
        <h1 className="text-xl font-bold text-brown-primary">{name}</h1>
      </div>
      <div className="flex justify-center items-center ">
        <h1 className="text-md font-semibold text-brown-primary">
          {t("main.unit")} {price}
        </h1>
      </div>
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={handleDecreaseQuantity}
          className="p-2 bg-gray-200 rounded-full"
        >
          <Minus size={16} />
        </button>
        <h1 className="text-md font-semibold text-brown-primary">{quantity}</h1>
        <button
          onClick={() => dispatch(increaseQuantity(id))}
          className="p-2 bg-gray-200 rounded-full"
        >
          <Plus size={16} />
        </button>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-md font-semibold text-brown-primary">
          {t("main.unit")} {quantity * price}
        </h1>
      </div>
    </div>
  );
};

export default CartItem;
