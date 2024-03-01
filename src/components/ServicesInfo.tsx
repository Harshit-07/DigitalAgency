import { serviceDescription } from "../constants/descriptions";

interface ServiceInfoProps {
  title: string;
  logo: string;
}

function ServicesInfo({ title, logo }: ServiceInfoProps) {
  return (
    <div className="p-4 rounded-lg text-center">
      <img src={`/images/${logo}.png`} alt={logo} className="h-8 mb-4" />
      <h2 className="text-xl font-semibold text-left pb-2">{title}</h2>
      <p className="text-left">{serviceDescription}</p>
    </div>
  );
}

export default ServicesInfo;
