import product from "@/martial-arts-shop-ecommerce/schemas/product";
import { simplifiedProduct } from "../interface";
import Image from "next/image";
import {client} from "../lib/sanity"
import Link from "next/link"


async function getData() {
  const query = `*[_type == "product"] | order(title asc) {
    _id,
    price, 
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": image[0].asset->url
  }`;

  try {
    const data = await client.fetch(query);
    console.log(data); // Log the response for inspection
    return data;
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    throw error; // Propagate the error
  }
}

export default async function Product_Grid() {
  const data: simplifiedProduct[] = await getData();

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
    {data.map((product, index)=>(

      <div key={product._id} className="group relative">
        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
          <Image src={product.imageUrl} alt="Product Image" 
          className="w-full h-full object-cover object-center lg:h-full lg:w-full"
          width={300}
          height={300}/>
          
        </div>

        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Link href={`/product/${product.slug}`}>
                {product.name}
              
              </Link>
            </h3>
            <p className="mt-[0.1rem] text-sm text-gray-500">{product.categoryName}</p>
          </div>
            <p className="text-sm font-medium">{product.price}€</p>
        </div>
      </div>


    ))}
  </div > 


    // ... rest of your component code
  );
}
