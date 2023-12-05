
import AddToCart from "@/app/components/AddToCart";
import CheckOut from "@/app/components/CheckOut";
import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"


async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name,
          sku,
          currency,
      }`;

  const data = await client.fetch(query);

  return data;
}

{/*export const dynamic = "force-dynamic";*/}



export default async function ProductPge({
  params,
}: {
  params: { slug: string };
}) {

  const data: fullProduct = await getData(params.slug);
  

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>

            <div className="flex gap-10 items-baseline mt-2 ">
              <div className="mb-2">
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-gray-800 md:text-2xl">
                    ${data.price}
                  </span>
                </div>

                <span className="text-sm text-gray-500">
                  Incl. Vat plus shipping
                </span>
              </div>

              <div className=" flex items-center gap-3 ">
                <div className="rounded-full gap-x-2">
                  <span className="text-sm ">4.2</span>
                  <Star className="h-5 w-5" />
                </div>

                <span className="text-sm text-gray-500 transition duration-100">
                  56 Ratings
                </span>
              </div>
            </div>
            <div className="mb-4 flex items-center gap-2 text-gray-500">
              <Truck />
              <span className="text-sm">2-4 Day Shipping</span>
            </div>

            <div className="flex gap-2.5">
            
            </div>

            <p className="mt-2 mb-10 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
            <div>
              <AddToCart data = {data}/>
              <CheckOut />
              
              

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}