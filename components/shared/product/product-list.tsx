import { ProductCard } from "./product-card";
import { Product } from "@/types";
export default function ProductList({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) {
  const products = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="m-2 font-bold text-2xl lg:text-3xl">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}
