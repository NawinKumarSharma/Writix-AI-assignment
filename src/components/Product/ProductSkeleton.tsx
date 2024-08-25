const ProductSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
        <div className="relative animate-pulse">
          <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
            <div className="h-full w-full bg-gray-200" />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <div className="bg-gray-200 h-4 w-full" />
            <div className="bg-gray-200 h-4 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSkeleton;
