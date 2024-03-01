import { aboutDescription } from "../constants/descriptions";
import Button from "./Button";

function About() {
  return (
    <div
      className="grid grid-cols-2 gap-8 px-20 py-40 pb-20 items-center "
      id="about"
    >
      <div className="col-span-1 mb-15">
        <h1 className="md:text-5xl lg:text-6xl font-semibold mb-">
          <span className="block">Building Brands</span>
          <span className="block">
            <span>in the</span>
            <span className="text-primary"> Digital Age</span>
          </span>
        </h1>
        <p className="text-md lg:text-base mt-6">{aboutDescription}</p>
        <Button text="Learn more" />
      </div>
      <div className="col-span-1 flex justify-center relative">
        <div className="relative">
          <img
            src="/images/discussion.png"
            alt="aboutImage"
            className="max-w-full h-auto"
          />
          <img
            src="/images/project-badge.png"
            alt="badge"
            className="absolute bottom-0 right-0 -mr-16 -mb-16"
          />
        </div>
      </div>
      <div className=" col-span-2 flex justify-center mt-20">
        <div className="text-center">
          <p className="text-sm mb-5">Powering next-gen companies</p>
          <img src="/images/customer-logos.png" alt="Customer Logos" />
        </div>
      </div>
    </div>
  );
}

export default About;
