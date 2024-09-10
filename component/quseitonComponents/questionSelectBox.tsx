import styles from '@/styles/component/questionSelectBox.module.scss';
import { ChangeEvent, useState } from 'react';

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
  const [selectValue, setSelectValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  return (
    <>
      <p>{title}</p>
      <input type="hidden" name={fe_id} value={selectValue} />
      <select
        defaultValue={defaultValue}
        className={styles.selectBox}
        onChange={handleChange}
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
