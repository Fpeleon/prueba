import "./Title.css";

export const Title = ({ content, backgroundSelected }) => {
  return (
    <span className="title" style={{ color: backgroundSelected }}>
      {content}
    </span>
  );
};
