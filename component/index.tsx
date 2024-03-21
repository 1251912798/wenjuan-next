import QusetionRadio from './quseitonComponents/qusetionRadio';
import QuestionInput from './quseitonComponents/questionInput';
import QuestionParagraph from './quseitonComponents/questionParagraph';
import QuestionTitle from './quseitonComponents/questionTitle';
import QuestionInfo from './quseitonComponents/questionInfo';
import QuestionTextarea from './quseitonComponents/questionTextarea';
import QuestionSelectBox from './quseitonComponents/questionSelectBox';
import QuestionCheckbox from './quseitonComponents/questionCheckbox';

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
  questionParagraph: QuestionParagraph,
  questionTitle: QuestionTitle,
  questionInfo: QuestionInfo,
  questionTextarea: QuestionTextarea,
  questionSelectBox: QuestionSelectBox,
  questionCheckbox: QuestionCheckbox,
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
