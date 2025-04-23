
export function SuggestedUser({ name, description, imageUrl }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <img
          className="h-8 w-8 rounded-full"
          src={imageUrl}
          alt={name}
        />
        <div className="ml-3">
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-gray-500 line-clamp-1">{description}</p>
        </div>
      </div>
      <button className="px-4 py-1 text-sm border border-gray-800 rounded-full hover:bg-gray-50">
        Follow
      </button>
    </div>
  );
}
