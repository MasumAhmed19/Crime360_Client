import SingleLoadSkeleton from "./SingleLoadSkeleton";

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-5 max-w-6xl mx-auto">
        <SingleLoadSkeleton/>
        <SingleLoadSkeleton/>
        <SingleLoadSkeleton/>
        <SingleLoadSkeleton/>
    </div>
  );
};

export default LoadingSkeleton;


