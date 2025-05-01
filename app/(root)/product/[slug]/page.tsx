import { ProductPrice } from "@/components/shared/product/product-price";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import { ProductImages } from "@/components/shared/product/product-images";
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    return notFound();
  }
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* IMAGES COL */}
          <div className="col-span-2">
            {/* IMAGE SLIDER */}
            <ProductImages images={product.images} />
          </div>
          {/* PRODUCT INFO COL */}
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <p>
                {product.rating} of {product.numReviews} Reviews
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <ProductPrice
                  value={product.price}
                  className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
                />
              </div>
            </div>
            <div className="mt-10">
              <p className="font-semibold">Description</p>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
          </div>
          {/* ACTION COL */}
          <div>
            <Card>
              <CardContent className="p-4">
                <div className="mb-2 flex justify-between">
                  <p className="text-sm font-semibold">Price</p>
                  <ProductPrice value={product.price} />
                </div>
                <div className="mb-2 flex justify-between">
                  <p className="text-sm font-semibold">Status</p>
                  <p className="text-sm text-gray-500">
                    {product.stock > 0 ? (
                      <Badge variant="outline">In Stock</Badge>
                    ) : (
                      <Badge variant="destructive">Out of Stock</Badge>
                    )}
                  </p>
                </div>
                {product.stock > 0 && (
                  <div className="flex flex justify-center items-center">
                    <Button className="w-full">Add to Cart</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
