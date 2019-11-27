import React from "react";

type ArticleLineProps = {
  onContainerClick?: Function;
  onContainerOver?: Function;
  text?: string;
};

const ArticleLine = (props: ArticleLineProps) => {
  return (
    <div
      onClick={() => props.onContainerClick && props.onContainerClick()}
      onMouseOver={() => props.onContainerOver && props.onContainerOver()}
    >
      <p>{props.text}</p>
    </div>
  );
};

ArticleLine.defaultProps = {
  onContainerClick: () => {},
};

export default ArticleLine;
