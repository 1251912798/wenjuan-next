import { post } from './http';

//提交答卷
export const postAnswer = async (answerInfo: any) => {
  const data = await post('/api/answer', answerInfo);
  return data;
};
