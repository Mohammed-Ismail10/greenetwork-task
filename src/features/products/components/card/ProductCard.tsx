"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/features/products/types/product";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <Card className="shadow-lg">
        <CardHeader className="flex justify-between items-center">
          <CardTitle>{product.title}</CardTitle>
          <CardAction>Sale: {product.discountPercentage} %</CardAction>
        </CardHeader>
        <CardContent>
          <Image
            className="border-2 border-black"
            src={product.thumbnail}
            alt={product.title}
            width={1000}
            height={100}
          />
        </CardContent>
        <CardFooter className="flex justify-between items-center grow">
          <span>Price: {product.price} $</span>
          <span>Rating: {product.rating}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
