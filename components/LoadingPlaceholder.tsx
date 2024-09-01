// components/LoadingPlaceholder.tsx

export default function LoadingPlaceholder() {
  return (
    <div className="project-card animate-pulse">
      <div className="max-h-44 h-44 w-full bg-gray-300 rounded-md"></div>
      <div className="flex flex-col gap-1 mt-2">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
}
