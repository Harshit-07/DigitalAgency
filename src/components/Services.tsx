import { serviceSubHeading, serviceHeading } from "../constants/headings";
import Button from "./Button";
import ServicesInfo from "./ServicesInfo";

function Services() {
  return (
    <div
      className="flex flex-col justify-center items-center bg-disabled pt-15 pb-10"
      id="service"
    >
      <h1 className="text-4xl text-center font-bold">{serviceHeading}</h1>
      <p className="text-md lg:text-base mt-6 mb-6">{serviceSubHeading}</p>
      <div className="grid grid-cols-4 gap-4 px-20">
        <ServicesInfo title="App Development" logo="app-dev" />
        <ServicesInfo title="Web Designing" logo="web-design" />
        <ServicesInfo title="Graphic Designing" logo="graphic-design" />
        <ServicesInfo title=" Digital Marketing" logo="digital-marketing" />
      </div>
      <Button text="Learn more" />
    </div>
  );
}

export default Services;
