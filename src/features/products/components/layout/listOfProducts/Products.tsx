"use client";
import useProducts from "@/features/products/hooks/useProducts";
import ProductCard from "../../card/ProductCard";
import { Product } from "@/features/products/types/product";
import { SkeletonCard } from "../../card/SkeletonCard";

interface ProductsProps {
  searchResults: Product[];
}

const Products = ({ searchResults }: ProductsProps) => {
  const { products, productsLoading } = useProducts();

  const displayedProducts = searchResults.length > 0 ? searchResults : products;

  if (productsLoading) return <SkeletonCard />;

  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {displayedProducts?.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
