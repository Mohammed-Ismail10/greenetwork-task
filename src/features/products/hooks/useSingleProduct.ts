import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "@/features/products/services/productServices";

const useSingleProduct = (id: number) => {
  const { data: singleProduct, isLoading: singleProductLoading } = useQuery({
    queryKey: ["singleProduct"],
    queryFn: () => getSingleProduct(id),
    select: (data) => data,
  });

  return {
    singleProduct,
    singleProductLoading,
  };
};

export default useSingleProduct;
