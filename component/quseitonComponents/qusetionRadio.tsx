import React from 'react';

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
  return (
    <>
      <p>{title}</p>
      <ul className={styles.radiolist}>
        {options.map(item => {
          let classname = '';
          if (isColum) {
            classname = styles.verticalList;
          } else {
            classname = styles.horizontaList;
          }
          return (
            <li key={item.value} className={classname}>
              <label>
                <input
                  type="radio"
                  name={fe_id}
                  value={item.value}
                  defaultChecked={val === item.value}
                />
                {item.label}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QusetionRadio;
