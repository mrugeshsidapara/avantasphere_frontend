import { DashboardLayout } from "@/components/DashboardLayout";
import ProductForm from "@/components/ProductForm";
import { productRepository } from "@/lib/repositories";

async function getProduct(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/products/${id}`,
    { cache: "no-store" },
  );

  return res.json();
}

export default async function EditProductPage({ params }: any) {
  const product = await productRepository.findById(params.id);
  console.log("Fetched product:", product);
  return (
    <DashboardLayout role="admin" currentPage="Products">
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Edit Product</h1>
          <p className="text-gray-500 text-sm">Update product details</p>
        </div>

        <ProductForm product={product} />
      </div>
    </DashboardLayout>
  );
}
