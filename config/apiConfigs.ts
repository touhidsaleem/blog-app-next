export const getArticlesByCategoryApi = (category: string) =>
  `${process.env.NEXT_PUBLIC_APPLICATION_API_URL}/api/posts?cat=${category}`;

export const getArticlesByIdApi = (id: string) =>
  `${process.env.NEXT_PUBLIC_APPLICATION_API_URL}/api/posts/${id}`;

export const getUserByIdApi = (id: string) =>
  `${process.env.NEXT_PUBLIC_APPLICATION_API_URL}/api/users/${id}`;

export const getAllCategoriesApi = () =>
  `${process.env.NEXT_PUBLIC_APPLICATION_API_URL}/api/categories`;
