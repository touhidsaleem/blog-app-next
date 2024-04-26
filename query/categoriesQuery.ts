import { getAllCategoriesApi } from "@/config/apiConfigs";
import { makeApiGetCall } from "@/utils/apiUtils";

export const getAllCategories = async () => {
  const url = getAllCategoriesApi();
  try {
    const response = await makeApiGetCall({ url });
    return response?.data;
  } catch (err) {
    return err;
  }
};
