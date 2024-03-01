import { analyticsDescription } from "../constants/descriptions";

function RealAnalytics() {
  return (
    <div className="absolute bottom-[-20%] right-0 bg-white p-3 w-[90%]">
      <h1 className="font-semibold text-xl pb-3">Realtime Analytics</h1>
      <p className="text-md">{analyticsDescription}</p>
      <div className="absolute right-1 bottom-0 flex h-4">
        <img src="/images/left-arrow.png" alt="leftArrow" />
      </div>
    </div>
  );
}

export default RealAnalytics;
