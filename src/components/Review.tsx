import { analyticsDescription, designation } from "../constants/descriptions";

function Review() {
  return (
    <>
      <img
        src="/images/inverted-comma.png"
        className="mt-5 px-10 pt-20"
        alt="comma"
      />
      <div className="grid grid-cols-3 px-20 pb-20 ">
        <div className="col-span-1 relative">
          <img
            src="/images/director.png"
            alt="director"
            className="max-w-full h-auto"
          />
        </div>
        <div className="col-span-2 relative flex flex-col">
          <p className="text-2xl">{analyticsDescription}</p>
          <p className="pt-10 text-lg ">{designation}</p>
          <div className="absolute right-0 bottom-0 flex items-center gap-3">
            <img src="/images/right-arrow.png" alt="RightArrow" />
            <img src="/images/left-arrow.png" alt="leftArrow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
