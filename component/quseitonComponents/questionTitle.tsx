import { CSSProperties } from 'react';

interface QuestionTitleProps {
  fe_id: string;
  props: {
    title: string;
    level: number;
    isCenter: boolean;
  };
}

const QuestionTitle = ({
  fe_id,
  props: { title, level, isCenter },
}: QuestionTitleProps) => {
  const style: CSSProperties = {};

  if (isCenter) style.textAlign = 'center';

  if (level === 1) return <h1 style={style}>{title}</h1>;
  if (level === 2) return <h2 style={style}>{title}</h2>;
  if (level === 3) return <h3 style={style}>{title}</h3>;
  if (level > 3) return <h3 style={style}>{title}</h3>;
  return null;
};

export default QuestionTitle;
