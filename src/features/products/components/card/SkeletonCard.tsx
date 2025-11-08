"use client";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-200" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px] bg-gray-200" />
              <Skeleton className="h-4 w-[200px] bg-gray-200" />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
