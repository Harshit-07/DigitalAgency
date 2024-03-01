import { footerDescription } from "../constants/descriptions";

const Footer = () => {
  return (
    <div className="bg-black px-20 py-20">
      <div className="grid grid-cols-5 gap-10 text-white">
        <div className="col-span-2 flex flex-col">
          <div className="mb-10">
            <p className="font-bold mb-3 text-lg">Digital Agency</p>
            <p>{footerDescription}</p>
          </div>
          <div>
            <img src="/images/social.png" alt="social" className="" />
          </div>
        </div>
        <div className="col-span-1 flex flex-col ">
          <p className="font-bold mb-3 text-lg">Company</p>
          <p className="mb-3">About</p>
          <p className="mb-3">Features</p>
          <p className="mb-3">Works</p>
          <p className="mb-3">Careers</p>
        </div>
        <div className="col-span-1 flex flex-col">
          <p className="font-bold mb-3 text-lg">Help</p>
          <p className="mb-3">Customer Support</p>
          <p className="mb-3">Delivery Details</p>
          <p className="mb-3">Terms & Conditions</p>
          <p className="mb-3">Privacy Policy</p>
        </div>
        <div className="col-span-1 flex flex-col">
          <p className="font-bold mb-3 text-lg">Resources</p>
          <p className="mb-3">Free eBooks</p>
          <p className="mb-3">How to - Blog</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
