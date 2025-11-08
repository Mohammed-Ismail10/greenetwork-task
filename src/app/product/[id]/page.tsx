"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import useSingleProduct from "@/features/products/hooks/useSingleProduct";
import useDeleteProduct from "@/features/products/hooks/useDeleteProduct";
import { Star } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

const ProductDetails = () => {
  const { id } = useParams();

  const { singleProduct, singleProductLoading } = useSingleProduct(Number(id));
  const { deleteSpecificProduct } = useDeleteProduct();

  return (
    <main className="container mx-auto py-6 grid grid-cols-1 lg:grid-cols-3 gap-20">
      {singleProductLoading ? (
        <section className="flex justify-center col-span-3">
          <Spinner className="size-20 text-black" />
        </section>
      ) : (
        <>
          <section>
            <Carousel>
              <CarouselContent>
                {singleProduct?.images.map((image: string) => (
                  <CarouselItem key={image}>
                    <Image
                      src={image}
                      alt={singleProduct.title}
                      width={1000}
                      height={100}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>
          <section className="col-span-2 flex items-center">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold">{singleProduct?.title}</h3>
              <p>{singleProduct?.description}</p>
              {singleProduct?.brand ? (
                <span>Brand: {singleProduct?.brand}</span>
              ) : null}
              <div className="flex justify-between items-center">
                <span>Price: {singleProduct?.price} $</span>
                <span className="flex gap-2">
                  Rating: {singleProduct?.rating} <Star color="yellow" />
                </span>
              </div>
              <Button
                onClick={() => deleteSpecificProduct(singleProduct?.id)}
                className="bg-red-400 cursor-pointer"
              >
                Delete
              </Button>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default ProductDetails;
