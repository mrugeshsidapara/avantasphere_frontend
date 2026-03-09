import { DashboardLayout } from "@/components/DashboardLayout";
import ProductForm from "@/components/ProductForm";

export default function NewProductPage() {
  return (
    <DashboardLayout role="admin" currentPage="Products">
      <div className="mx-auto p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Add Product</h1>
          <p className="text-gray-500 text-sm">Create new product in catalog</p>
        </div>

        {/* Card */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <ProductForm />
        </div>
      </div>
    </DashboardLayout>
  );
}
