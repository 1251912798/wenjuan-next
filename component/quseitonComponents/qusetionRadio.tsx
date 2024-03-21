import React, { useState } from 'react';

import styles from '@/styles/component/qusetionRadio.module.scss';
type optionType = {
  value: string;
  label: string;
};

interface QusetionRadioProps {
  fe_id: string;
  props: {
    title: string;
    isColum: boolean;
    value: string;
    options: optionType[];
  };
}

const QusetionRadio = ({ fe_id, props }: QusetionRadioProps) => {
  const { title, isColum, value: val, options = [] } = props;

  const [selectValue, setSelectValue] = useState('');

  const handleChange = (value: string) => {
    setSelectValue(value);
  };

  return (
    <>
      <p>{title}</p>
      <input type="hidden" name={fe_id} value={selectValue} />
      <ul className={styles.radiolist}>
        {options.map(item => {
          const { value = '', label } = item;

          let classname = '';
          if (isColum) {
            classname = styles.verticalList;
          } else {
            classname = styles.horizontaList;
          }
          return (
            <li key={value} className={classname}>
              <label>
                <input
                  type="radio"
                  onChange={() => handleChange(value)}
                  defaultChecked={val === value}
                />
                {label}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QusetionRadio;
