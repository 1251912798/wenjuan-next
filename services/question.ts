import { get } from './http';

// 获取问卷
export const getCompnentApi = async (id: string) => {
  const data = await get(`/api/question/${id}`);
  return data;
};
