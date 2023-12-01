import { simplifiedProduct } from "../interface";

async function getData() {
    const query =`*[_type == "product"] | order(title asc){
        _id,
        price, 
        name ,
        "slug": slug.current,
        "categoryName":category->name ,
        "imageUrl":image[0].asset->url
    
    }`;
    const data =  await client.fetch(query);
    return data;
}

export default async function Product_Grid(){
    const data: simplifiedProduct[] = await getData();

  return (
    <div>Product_Grid</div>
  )
}

 