import Image from "next/image";
import { useEffect, useState } from "react";
import ProductSkeleton from "./ProductSkeleton";

interface Product {
  id: number;
  title: string;
  image: string;
}
const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

const Product = async () => {
  const data = await getData();
  // console.log(data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
      {data.map((product: Product) => (
        <div key={product.id} className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden cursor-pointer rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              className="h-full w-full object-cover object-center"
            />
            console.log(data);
          </div>
          <div className="mt-4 flex justify-between">
            <div className="py-5 mb-5">
              <h3 className="text-lg hover:text-gray-300 font-bold dark:text-white">{product.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
