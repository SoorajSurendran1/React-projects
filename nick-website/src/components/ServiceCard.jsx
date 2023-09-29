const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="flex justify-center items-center rounded-full w-11 h-11 bg-coral-red">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin font-bold leading-normal text-3xl">
        {label}
      </h3>
      <p className="mt-3 text-slate-gray font-montserrat text-lg leading-normal break-words">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
