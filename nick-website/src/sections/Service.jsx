import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Service = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((item) => (
        <ServiceCard key={item.label} {...item} />
      ))}
    </section>
  );
};

export default Service;
