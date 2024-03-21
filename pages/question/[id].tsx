import PageWrapper from '@/component/pageWrapper';
import QusetionInput from '@/component/quseitonComponents/questionInput';
import QusetionRadio from '@/component/quseitonComponents/qusetionRadio';
import { getCompnentApi } from '@/services/question';
import { getComponent } from '@/component/index';

import styles from '@/styles/Home.module.scss';

interface QusetionProps {
  code: number;
  data?: {
    id: string;
    title: string;
    desc?: string;
    js?: string;
    css?: string;
    isPublished: boolean;
    isDeleted: boolean;
    componentList: Array<any>;
  };
  msg?: string;
}

const Qusetion = ({ code, data, msg = '' }: QusetionProps) => {
  if (code !== 0) {
    return (
      <PageWrapper title="错误">
        <h1>错误</h1>
        <p>{msg}</p>
      </PageWrapper>
    );
  }
  const {
    id,
    title,
    desc = '',
    js = '',
    css = '',
    isPublished,
    isDeleted,
    componentList = [],
  } = data || {};

  if (isDeleted) {
    return (
      <PageWrapper title={title as string} desc={desc}>
        <h1>该问卷已删除</h1>
      </PageWrapper>
    );
  }
  if (!isPublished) {
    return (
      <PageWrapper title={title as string} desc={desc}>
        <h1>该问卷未发布</h1>
      </PageWrapper>
    );
  }

  const Component = componentList.map(item => {
    const Element = getComponent(item);
    return (
      <div key={item.fe_id} className={styles.questionsWrap}>
        {Element}
      </div>
    );
  });

  return (
    <PageWrapper title={title as string} desc={desc}>
      <form method="post" action="/api/answer">
        <input type="hidden" name="questionId" value={id} />
        {Component}
        <div className={styles.submitContent}>
          <button type="submit">提交</button>
        </div>
      </form>
    </PageWrapper>
  );
};

export async function getServerSideProps(context: any) {
  const { id = '' } = context.params;

  const res = await getCompnentApi(id);

  return {
    props: res,
  };
}

export default Qusetion;
