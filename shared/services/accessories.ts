import { Accessories, Product } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const getAll = async (): Promise<Accessories[]> => {
  return (await axiosInstance.get<Accessories[]>(ApiRoutes.ACCESSORIES)).data;
};
