import useGetReviews from "@/api/getReviews";
import { PageWrapper } from "../design-systems/PageWrapper";
import ReviewCard from "./components/ReviewCard";
import { Spinner } from "phosphor-react";
import { useTranslation } from "react-i18next";

const Reviews = () => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useGetReviews();

  if (isLoading) return <Spinner size={50} color="#A86C64s" />;

  if (isError || !data) {
    return <p>{t("errors.fetchReviews")}</p>;
  }

  return (
    <PageWrapper>
      <h1 className="pb-20 md:pb-32 text-5xl font-semibold text-center text-brown-primary">
        {t("reviews.header")}
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {data.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            title={review.title}
            description={review.description}
            image={review.image}
            location={review.location}
          />
        ))}
      </section>
    </PageWrapper>
  );
};

export default Reviews;
