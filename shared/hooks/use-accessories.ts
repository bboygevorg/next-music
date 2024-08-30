import { Api } from "@/shared/services/api-client";
import { Accessories } from "@prisma/client";
import { useEffect, useState } from "react";

export const useAccessories = () => {
  const [accessories, setAccessories] = useState<Accessories[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAccessories() {
      try {
        setLoading(true);
        const accessories = await Api.accessories.getAll();
        setAccessories(accessories);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchAccessories();
  }, []);

  return {
    accessories,
    loading,
  };
};
