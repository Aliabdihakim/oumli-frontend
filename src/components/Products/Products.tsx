import useGetProducts from "@/api/getProducts";
import { PageWrapper } from "../design-systems/PageWrapper";
import { Button } from "../design-systems/Button";
import { useTranslation } from "react-i18next";
import { Description } from "../design-systems/Description";
import { Link } from "react-router-dom";
import { Loading } from "../design-systems/Loading";

type ProductsProps = {
  limit?: number;
  columns?: number;
};

const Products = ({ limit, columns = 2 }: ProductsProps) => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useGetProducts();

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
    return <p>{t("errors.fetchProducts")}</p>;
  }

  const productsToShow = limit ? data.slice(0, limit) : data;

  return (
    <PageWrapper>
      <section className="py-32 text-center">
        <Description
          title={
            <h1 className="text-6xl text-center text-brown-primary font-semibold">
              {t("main.foodBoxes")}
            </h1>
          }
          description={
            <p className="text-center text-xl">{t("products.description")}</p>
          }
          gap={6}
        />
        <div
          className={`grid grid-cols-1 md:grid-cols-${columns} gap-16 pt-20`}
        >
          {productsToShow.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center justify-between"
            >
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={`img-${product.name}`} />
              </Link>
              <h2 className="text-xl font-semibold text-brown-primary py-4">
                {product.name}
              </h2>

              <Link to={`/product/${product.id}`}>
                <Button variant="secondary">{t("button.showProduct")}</Button>
              </Link>
            </div>
          ))}
        </div>
        {limit && (
          <Link to="/products">
            <Button size="lg" className="mt-20 py-6 px-12 text-center">
              {t("main.showAllProducts")}
            </Button>
          </Link>
        )}
      </section>
    </PageWrapper>
  );
};

export default Products;
