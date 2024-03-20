// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { postAnswer } from '@/services/answer';

import type { NextApiRequest, NextApiResponse } from 'next';

function ReqBody(reqBody: any) {
  const answerList: Array<any> = [];

  Object.keys(reqBody).forEach(item => {
    if (item === 'questionId') return;
    answerList.push({
      componentId: item,
      value: reqBody[item],
    });
  });

  return {
    questionId: reqBody.questionId || '',
    answerList,
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(200).json({ error: -1, msg: 'Method noly post' });
  }
  const data = ReqBody(req.body);

  try {
    const resData = await postAnswer(data);
    console.log(resData);

    if (resData.code === 0) {
      // 提交成功
      res.redirect('/success');
    } else {
      // 提交失败
      res.redirect('/fail');
    }
  } catch (error) {
    res.redirect('/fail');
  }
  console.log(data);
  res.status(200).json({ errno: 0 });
}
