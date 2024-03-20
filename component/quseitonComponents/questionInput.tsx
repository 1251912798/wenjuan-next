import styles from '@/styles/component/qusetionInput.module.scss';

interface QuestionInputProps {
  fe_id: string;
  props: {
    title: string;
    placeholder: string;
  };
}

const QuestionInput = ({ fe_id, props }: QuestionInputProps) => {
  const { title, placeholder = '' } = props;
  return (
    <>
      <p className={styles.title}>{title}</p>
      <div className={styles.inputWrapper}>
        <input type="text" name={fe_id} placeholder={placeholder} />
      </div>
    </>
  );
};

export default QuestionInput;
