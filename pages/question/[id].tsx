import React from 'react';
import QusetionInput from '@/component/questionInput';
import QusetionRadio from '@/component/qusetionRadio';

interface QusetionProps {
  id: string;
}

const Qusetion = ({ id }: QusetionProps) => {
  return (
    <>
      {/* <h1>Qusetion</h1> */}
      {/* {id} */}
      <QusetionInput
        fe_id="c1"
        props={{ title: '姓名', placeholder: '请输入姓名' }}
      />
      <QusetionRadio
        fe_id="c2"
        props={{
          title: '工作年限',
          isColum: false,
          value: 'item1',
          options: [
            { value: 'item1', label: '选项1' },
            { value: 'item2', label: '选项2' },
            { value: 'item3', label: '选项3' },
          ],
        }}
      />
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { id = '' } = context.params;
  return {
    props: {
      id,
    },
  };
}

export default Qusetion;
