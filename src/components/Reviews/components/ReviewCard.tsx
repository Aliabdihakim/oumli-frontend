import { Description } from "@/components/design-systems/Description";

type ReviewCardProps = {
  name: string;
  title: string;
  description: string;
  image: string;
  location: string;
};

const ReviewCard = ({
  name,
  title,
  description,
  image,
  location,
}: ReviewCardProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <img
        alt={`img-${name}`}
        src={image}
        className="w-40 h-40 object-cover rounded-full border-8 border-light-brown"
      />
      <Description
        title={
          <h1 className="text-xl font-medium text-brown-primary text-center">
            {title}
          </h1>
        }
        description={
          <div className="text-center flex flex-col gap-4">
            <p className="text-sm font-normal text-brown-primary">
              {description}
            </p>
            <Description
              title={
                <p className="text-sm font-semibold text-brown-primary">
                  {name}
                </p>
              }
              description={
                <p className="text-sm font-normal text-brown-primary">
                  {location}
                </p>
              }
              gap={1}
            />
          </div>
        }
        gap={4}
      />
    </div>
  );
};

export default ReviewCard;
