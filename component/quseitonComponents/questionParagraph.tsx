import { CssVariable } from 'next/dist/compiled/@next/font';
import { CSSProperties } from 'react';

interface QuestionParagraphProps {
  fe_id: string;
  props: {
    text: string;
    isCenter: boolean;
  };
}

const QuestionParagraph = ({
  fe_id,
  props: { text, isCenter },
}: QuestionParagraphProps) => {
  let style: CSSProperties = {};

  if (isCenter) style.textAlign = 'center';
  const textList = text.split('\n');
  return (
    <>
      <p style={style}>
        {textList.map((item, index) => (
          <span key={index}>
            {index > 0 && <br />}
            {item}
          </span>
        ))}
      </p>
    </>
  );
};

export default QuestionParagraph;
