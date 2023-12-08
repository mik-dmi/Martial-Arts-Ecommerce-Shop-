


import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import Footer from './components/Footer';
import {client} from "./lib/sanity"
import { simplifiedProduct } from "./interface";

async function getData(filter: string, order: string) {
  const query = `${filter}  ${order}{
    _id,
    _createdAt,
    price, 
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
  }`;

  const data = await client.fetch(query);
  return data;
}

interface Props {
  searchParams: {
    date?: string
    price?: string
    category?: string
    kind?: string
  }
}

export default async function Page({ searchParams }: Props) {
  const { date = "desc", price, category, kind } = searchParams;
  console.log("Original date:", date);
  const priceOrder = price ? `| order(price ${price})` : "";
  console.log("Price order:", priceOrder);
  const dateOrder = date ? `| order(_createdAt ${date})` : "";
  console.log("Date order:", dateOrder);
  const order = `${dateOrder}${priceOrder}`;
  

  const productFilter = `_type == "product"`;
  const categoryFilter = category ? `&& category->name == "${category}"` : "";
  const typeFilter = kind ? `&& kind->name == "${kind}"` : "";
  const filter = `*[${productFilter}${categoryFilter}${typeFilter}]`;

  const dataProducts: simplifiedProduct[] = await getData(filter, order);
  console.log("dataProducts =========================================================================================")
  console.log(dataProducts)
  console.log(filter , order )

  return (
    <div>
      <Hero />
      <ProductsSection dataProducts = {dataProducts} />
      <Footer />
    </div>
  )
}
