"use server";

//get all products
export const getProducts = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

//get single product
export const getSingleProduct = async (id: number) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

//search product
export const searchProduct = async (word: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/search?q=${word}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
