const StatsSkeleton = () => {
  return (
    <section className="w-full py-12 bg-gray-50 animate-pulse">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="h-8 w-24 mx-auto bg-gray-200 rounded-md mb-2"></div>
            <div className="h-6 w-32 mx-auto bg-gray-200 rounded-md"></div>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="h-8 w-24 mx-auto bg-gray-200 rounded-md mb-2"></div>
            <div className="h-6 w-32 mx-auto bg-gray-200 rounded-md"></div>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="h-8 w-24 mx-auto bg-gray-200 rounded-md mb-2"></div>
            <div className="h-6 w-32 mx-auto bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSkeleton;