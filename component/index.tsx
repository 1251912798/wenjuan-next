import QusetionRadio from './quseitonComponents/qusetionRadio';
import QuestionInput from './quseitonComponents/questionInput';

type ComponentProps = {
  fe_id: string;
  type: string;
  title: string;
  isHied: boolean;
  props: any;
};

const list: any = {
  questionRadio: QusetionRadio,
  questionInput: QuestionInput,
};

export const getComponent = ({
  fe_id,
  type,
  isHied,
  props,
}: ComponentProps) => {
  if (isHied) return null;

  const Component = list[type];
  if (Component) {
    return <Component fe_id={fe_id} props={props} />;
  }
  return null;
};
