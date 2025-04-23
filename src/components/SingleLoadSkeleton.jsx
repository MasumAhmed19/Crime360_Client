const SingleLoadSkeleton = () => {
    return (
        <section className="p-4 bg-white rounded-md space-y-3 ">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <div className="w-8 h-8 bg-slate-200 rounded-full animate-pulse"></div>
          <div className="h-4 w-24 bg-slate-200 rounded animate-pulse"></div>
        </div>
        <div className="h-6 w-6 bg-slate-200 rounded animate-pulse"></div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Section */}
        <div className="flex flex-col gap-3 w-full md:w-2/3">
          <div className="h-6 bg-slate-200 rounded w-3/4 animate-pulse"></div>
          <div className="h-4 bg-slate-200 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-slate-200 rounded w-5/6 animate-pulse"></div>
        </div>

        {/* Right Section: Image Skeleton */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <div className="h-[140px] w-full md:w-[200px] bg-slate-200 rounded-md animate-pulse"></div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between mt-4">
        {/* Date, Likes, Comments */}
        <div className="flex md:gap-3 items-center gap-10 text-sm text-gray-500">
          <div className="h-4 bg-slate-200 rounded w-20 animate-pulse"></div>
          <div className="h-6 bg-slate-200 rounded w-16 animate-pulse"></div>
          <div className="h-6 bg-slate-200 rounded w-32 animate-pulse"></div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 items-center">
          <div className="h-8 bg-slate-200 rounded w-36 animate-pulse"></div>
          <div className="h-8 bg-slate-200 rounded w-36 animate-pulse"></div>
        </div>
      </div>

    </section>
    );
};

export default SingleLoadSkeleton;