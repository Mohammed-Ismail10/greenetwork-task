"use client";
import Header from "@/features/products/components/layout/header/Header";
import Products from "@/features/products/components/layout/listOfProducts/Products";
import useSearchProduct from "@/features/products/hooks/useSearchProduct";

const ProductsPageContent = () => {
  const { handleSearch, searchResults } = useSearchProduct();

  return (
    <main className="container mx-auto py-6 flex flex-col gap-6">
      <Header onSearch={handleSearch} />
      <Products searchResults={searchResults} />
    </main>
  );
};

export default ProductsPageContent;
