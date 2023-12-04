


import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import {client} from "./lib/sanity"
import { simplifiedProduct } from "./interface";

async function getData(filter : string ,order : string) {
  const query = `${filter}  ${order} {
    _id,
    _createdAt,
    price, 
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
  }`;

  try {
    const data = await client.fetch(query);
    console.log(data); 
    return data;
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    throw error; 
  }
}

interface Props{
  searchParams: {
    date?: string 
    price?: string
    category?: string
    kind?: string
  }
}




export default async function Home({searchParams}: Props) {
  const {date , price, category , kind} = searchParams
  const priceOrder = price ? `| order(price ${price})`:""
  const dateOrder = date ? `| order(_createdAt ${date})`: ""
  const order = `${priceOrder}${dateOrder}`;
  console.log("props =========================================================================================")
  console.log(order)
  
  const productFilter = `_type == "product"`
  const categoryFilter = category ? `&& category->name == "${category}" ` : "" 
  const typeFilter = kind ? `&& kind->name == "${kind}"` : "" 
  const filter = `*[${productFilter}${categoryFilter}${typeFilter}]`

  console.log(filter)
  console.log("Here is the filter >>>>>>>>> ")

  const dataProducts: simplifiedProduct[] = await getData(filter,order );
  return (
    <div>
      <Hero />
      <ProductsSection dataProducts = {dataProducts} />
    </div>
  )
}
