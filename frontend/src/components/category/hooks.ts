import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "./api";
import { Business } from "../business/types";
import { fetchBusinessById } from "../business/api";

export const CATEGORY_KEY = "CATEGORY_KEY";

export const useCategories = () => {
  return useQuery({
    queryKey: [CATEGORY_KEY],
    queryFn: fetchCategories,
  });
};

export const useBusiness = (businessId: string | undefined) => {
  return useQuery<Business>({
    queryKey: ["BUSINESS", businessId],
    queryFn: () => fetchBusinessById(businessId!),
    enabled: !!businessId,
  });
};
