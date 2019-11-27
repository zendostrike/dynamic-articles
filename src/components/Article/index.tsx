import React from "react";

import ArticleLine from "../ArticleLine";

interface Event {
  onContainerClick?: Function;
  onContainerOver?: Function;
}

interface Line {
  content: string;
  events: Event;
}

type ArticleProps = {
  lines: Array<Line>;
};

const Article = ({ lines }: ArticleProps) => {
  return (
    <div>
      <div>
        {lines.map(line => (
          <ArticleLine
            text={line.content}
            onContainerClick={
              line.events.onContainerClick && line.events.onContainerClick
            }
            onContainerOver={
              line.events.onContainerOver && line.events.onContainerOver
            }
          />
        ))}
      </div>
      <span>by the author.</span>
    </div>
  );
};

export default Article;
