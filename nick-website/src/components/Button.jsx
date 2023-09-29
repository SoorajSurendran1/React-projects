const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-monsterrat text-lg leading-none rounded-full border 
      ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "bg-coral-red  text-white border-coral-red"
      }
      ${fullWidth && "w-full"}
     `}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow_right_icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
