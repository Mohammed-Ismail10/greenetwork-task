import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteProduct } from "@/features/products/services/productActions";

const useDeleteProduct = () => {
  const router = useRouter();

  const deleteSpecificProduct = async (id: number) => {
    try {
      const deletedProduct = await deleteProduct(id);
      if (deletedProduct.isDeleted) {
        toast.success("Product deleted successfully");
        router.push("/");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product");
    }
  };

  return { deleteSpecificProduct };
};

export default useDeleteProduct;
