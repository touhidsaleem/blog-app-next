import {
  getArticlesByCategoryApi,
  getArticlesByIdApi,
} from "@/config/apiConfigs";
import { makeApiGetCall } from "@/utils/apiUtils";

export const getArticlesByCategory = async (category: string) => {
  const url = getArticlesByCategoryApi(category);
  try {
    const response = await makeApiGetCall({ url });
    return response?.data;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export const getArticlesById = async (id: string) => {
  const url = getArticlesByIdApi(id);
  try {
    const response = await makeApiGetCall({ url });
    return response?.data;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};
