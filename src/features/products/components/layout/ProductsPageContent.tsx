"use client";
import Header from "./header/Header";
import Products from "./listOfProducts/Products";
import useSearchProduct from "../../hooks/useSearchProduct";

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
