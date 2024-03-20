import Head from 'next/head';

import PageWrapper from '@/component/pageWrapper';

const Success = () => {
  return (
    <PageWrapper title="提交成功" desc="success Page">
      <h1>成功</h1>
      <p>提交成功</p>
    </PageWrapper>
  );
};

export default Success;
