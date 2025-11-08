"use client";
import { useState } from "react";
import { searchProduct } from "../services/productServices";

const useSearchProduct = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      const data = await searchProduct(query);
      setSearchResults(data.products || data);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  return { searchResults, handleSearch };
};

export default useSearchProduct;
