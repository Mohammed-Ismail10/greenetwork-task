"use client";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}
const queryClient = new QueryClient();

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center"/>
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
