import { useEffect, useState } from "react";
import { Filters } from "./use-filters";
import qs from "qs";
import router, { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();
  useEffect(() => {
    const params = {
      ...filters.prices,
      views: Array.from(filters.views),
      accessories: Array.from(filters.selectedAccessories),
    };

    const query = qs.stringify(params, {
      arrayFormat: "comma",
    });

    router.push(`?${query}`, { scroll: false });
  }, [filters, router]);
};
