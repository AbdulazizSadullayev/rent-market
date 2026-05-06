const ProductCardSkeleton = () => {
  return (
    <div className="w-full rounded-2xl bg-white p-4 shadow-sm sm:rounded-3xl sm:p-6 animate-pulse">
      <div className="mb-4 h-6 w-3/5 rounded bg-gray-200" />
      <div className="mb-5 h-44 rounded-2xl bg-gray-100 sm:mb-6 sm:h-[200px]" />

      <div className="mb-6 flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <div className="h-6 w-24 rounded bg-gray-200" />
          <div className="h-3 w-16 rounded bg-gray-100" />
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="h-4 w-20 rounded bg-gray-200" />
          <div className="h-3 w-14 rounded bg-gray-100" />
        </div>
      </div>

      <div className="mb-6 grid grid-cols-3 gap-2 rounded-[20px] bg-[#F8F8F8] p-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="flex flex-col items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gray-200" />
            <div className="h-2 w-12 rounded bg-gray-200" />
          </div>
        ))}
      </div>

      <div className="h-12 w-full rounded-2xl bg-gray-200 sm:h-14" />
    </div>
  );
};

export default ProductCardSkeleton;
