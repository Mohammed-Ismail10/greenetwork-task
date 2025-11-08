"use client";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/features/products/services/productServices";

const useProducts = () => {
  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    select: (data) => data.products,
  });

  return {
    products,
    productsLoading,
  };
};

export default useProducts;
