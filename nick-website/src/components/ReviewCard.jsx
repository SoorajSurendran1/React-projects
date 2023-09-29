import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt={customerName}
        className="object-cover rounded-full w-[120px] h-[120px]"
      />
      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>
      <div className="flex justify-center items-center mt-3 gap-2.5">
        <img
          src={star}
          alt="rating_icon"
          className="object-contain m-0"
          width={24}
          height={24}
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-bold font-palanquin text-3xl text-center">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
