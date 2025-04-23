import React from 'react';

const SingleCardSkeleton = () => {
    return (
        <div>
  <div className="max-w-screen-xl mx-auto py-[40px]">
    <div className="grid md:grid-cols-4 grid-cols-1">
      {/* Main Content */}
      <div className="col-span-1 md:col-span-3 space-y-5 p-6">
        {/* Title Skeleton */}
        <div className="h-8 bg-gray-300 rounded w-3/4 animate-pulse"></div>

        {/* User Info Skeleton */}
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="flex flex-col gap-2">
            <div className="h-4 bg-gray-300 rounded w-32 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
          </div>
        </div>

        <hr />

        {/* Interaction Buttons Skeleton */}
        <div className="flex md:gap-3 items-center gap-10 text-gray-500 text-base">
          <div className="h-5 bg-gray-300 rounded w-20 animate-pulse"></div>
          <div className="h-5 bg-gray-300 rounded w-40 animate-pulse"></div>
        </div>

        <hr />

        {/* Product Image Skeleton */}
        <div className="h-[40vh] w-full bg-gray-300 rounded-md animate-pulse"></div>

        {/* Product Info Skeleton */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="h-5 bg-gray-300 rounded w-32 animate-pulse"></div>
          <div className="h-5 bg-gray-300 rounded w-40 animate-pulse"></div>
          <div className="h-5 bg-gray-300 rounded w-28 animate-pulse"></div>
        </div>

        {/* Problem Description Skeleton */}
        <div className="space-y-3">
          <div className="h-8 bg-gray-300 rounded w-1/2 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-4/5 animate-pulse"></div>
        </div>

        <hr />

        {/* Recommendations Form Skeleton */}
        <div className="flex flex-col gap-5">
          <div className="h-6 bg-gray-300 rounded w-1/2 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
          <div className="h-10 bg-gray-300 rounded w-full animate-pulse"></div>
        </div>

        <hr />

        {/* Recommendations Cards Skeleton */}
        <div className="space-y-3">
          <div className="h-20 bg-gray-300 rounded w-full animate-pulse"></div>
          <div className="h-20 bg-gray-300 rounded w-full animate-pulse"></div>
          <div className="h-20 bg-gray-300 rounded w-full animate-pulse"></div>
        </div>
      </div>

      {/* Sidebar Skeleton */}
      <div className="col-span-1 space-y-5 p-6">
        <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>
        <div className="h-10 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-10 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-10 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-10 bg-gray-300 rounded w-full animate-pulse"></div>
      </div>
    </div>
  </div>
</div>

    );
};

export default SingleCardSkeleton;