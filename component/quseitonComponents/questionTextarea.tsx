import styles from '@/styles/component/questionTextarea.module.scss';

interface QuestionTextareaProps {
  fe_id: string;
  props: {
    title: string;
    placeholder: string;
  };
}

const QuestionTextarea = ({
  fe_id,
  props: { title, placeholder },
}: QuestionTextareaProps) => {
  return (
    <>
      <p>{title}</p>
      <div className={styles.textareaWarp}>
        <textarea
          style={{ resize: 'none' }}
          name={fe_id}
          rows={6}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default QuestionTextarea;
