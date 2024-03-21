interface questionInfoProps {
  fe_id: string;
  props: {
    title: string;
    text: string;
  };
}

const QuestionInfo = ({ fe_id, props: { title, text } }: questionInfoProps) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default QuestionInfo;
