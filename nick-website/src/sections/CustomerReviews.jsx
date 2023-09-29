import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-4xl text-center font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg  text-center info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex justify-evenly itmes-center flex-1 max-lg:flex-col gap-14">
        {reviews.map((item) => (
          <ReviewCard key={item.customerName} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
