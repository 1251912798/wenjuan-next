import { ChangeEvent, useEffect, useState } from 'react';

import styles from '@/styles/component/questionCheckbox.module.scss';

interface QuestionCheckboxProps {
  fe_id: string;
  props: {
    title: string;
    isColumn: boolean;
    list: Array<{
      label: string;
      value: string;
      checked: boolean;
    }>;
  };
}

const QuestionCheckbox = ({ fe_id, props }: QuestionCheckboxProps) => {
  const { title, isColumn, list = [] } = props;
  const [checkArr, setCheckArr] = useState<String[]>([]);

  // checked 的变化
  const handlerChange = (val: string) => {
    if (checkArr.includes(val)) {
      setCheckArr(prev => prev.filter(item => item !== val));
    } else {
      setCheckArr(checkArr.concat(val));
    }
  };

  // 初始化默认选中
  useEffect(() => {
    if (list.length) {
      list.forEach(item => {
        if (item.checked) {
          setCheckArr(prev => prev.concat(item.value));
        }
      });
    }
  }, [list]);

  return (
    <>
      <p>{title}</p>
      <input type="hidden" name={fe_id} value={checkArr.toString()} />
      <ul className={styles.ulList}>
        {list.map(item => {
          let classname = '';
          if (isColumn) {
            classname = styles.verticalList;
          } else {
            classname = styles.horizontaList;
          }
          return (
            <li key={item.value} className={classname}>
              <label>
                <input
                  onChange={() => handlerChange(item.value)}
                  type="checkbox"
                  checked={checkArr.includes(item.value)}
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

export default QuestionCheckbox;
