import { useEffect, useState } from "react";
import type { CardOneObjectProps } from "@/components/type";
import { fetchProducts } from "@/api/products";

export const useProducts = () => {
  const [products, setProducts] = useState<CardOneObjectProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      setLoading(true);
      const data = await fetchProducts();
      if (isMounted) {
        setProducts(data);
        setLoading(false);
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return { products, loading };
};
