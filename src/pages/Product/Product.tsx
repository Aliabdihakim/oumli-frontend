import useGetSingleProduct from "@/api/getSingleProduct";
import { Description } from "@/components/design-systems/Description";
import { PageWrapper } from "@/components/design-systems/PageWrapper";
import { addToCart } from "@/redux/slices/cartSlice";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Products from "@/components/Products/Products";
import { Loading } from "@/components/design-systems/Loading";

type FormData = {
  quantity: number;
};

const Product = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>()!;
  const productId = id ? parseInt(id, 10) : NaN;
  const { data, isLoading, isError } = useGetSingleProduct(productId);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: { quantity: 1 },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
    return <p>Error fetching products</p>;
  }

  const onSubmit = (formData: FormData) => {
    console.log({
      id: data.id,
      name: data.name,
      price: data.price,
      quantity: formData.quantity,
      image: data.image,
    });

    if (data) {
      dispatch(
        addToCart({
          id: data.id,
          name: data.name,
          price: data.price,
          quantity: formData.quantity,
          image: data.image,
        })
      );
    }
  };

  return (
    <div className="bg-light-brown py-20">
      <PageWrapper>
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <img
            alt={`img-${id}`}
            src={data.image}
            className="md:w-96 lg:w-[500px]"
          />
          <div className="space-y-12">
            <Description
              title={
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-semibold ">{data.price} SEK</h1>
                  <h1 className="text-4xl font-semibold ">{data.name}</h1>
                </div>
              }
              description={<p className="text-xl">{data.description}</p>}
              gap={8}
            />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex items-center gap-4"
            >
              <input
                type="number"
                {...register("quantity", { min: 1 })}
                className="w-16 p-2 border rounded"
              />
              <button
                type="submit"
                className="bg-secondary text-white px-4 py-2 rounded w-full"
              >
                {t("main.add")}
              </button>
            </form>
          </div>
        </div>
        <Products columns={4} />
      </PageWrapper>
    </div>
  );
};

export default Product;
