// import Image from "next/image";

// export interface TProduct {
//   id: number;
//   title: string;
//   category: string;
//   image: string;
// }
// export const getData = async () => {
//   const res = await fetch("https://fakestoreapi.com/products");
//   return res.json();
// };

// const Product = async () => {
//   const data = await getData();

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
//     {
//         data.map((product: TProduct) => (
//           <div key={product.id} className="group relative">
//             <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden cursor-pointer rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//               <Image
//                 src={product.image}
//                 alt={product.title}
//                 width={400}
//                 height={400}
//                 className="h-full w-full object-cover object-center"
//               />
//               console.log(data);
//             </div>
//             <div className="mt-4 flex justify-between">
//               <div className="py-5 mb-5">
//                 <h3 className="text-lg hover:text-gray-300 font-bold dark:text-white">
//                   {product.title}
//                 </h3>
//                 <p className="text-blue-600">{product.category}</p>
//               </div>
//             </div>
//           </div>
//         ))
//       }
//     </div>
//   );
// };

// export default Product;
import React from 'react'

const Product = () => {
  return (
    <div>Product</div>
  )
}

export default Product