import styles from '@/styles/component/questionSelectBox.module.scss';

type optionType = {
  value: string;
  label: string;
};

interface QuestionSelectBoxProps {
  fe_id: string;
  props: {
    title: string;
    options: optionType[];
    defaultValue?: string;
  };
}

const QuestionSelectBox = ({ fe_id, props }: QuestionSelectBoxProps) => {
  const { title, options = [], defaultValue } = props;
  return (
    <>
      <p>{title}</p>
      <select
        name={fe_id}
        defaultValue={defaultValue}
        className={styles.selectBox}
      >
        <option value="">请选择...</option>
        {options.map(item => {
          const { label, value } = item;
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default QuestionSelectBox;
