import ProductList from "@/components/shared/product/product-list";
import { getProducts } from "@/lib/actions/product.actions";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Home" };

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <ProductList data={products} title="Featured Products" />
    </>
  );
}
