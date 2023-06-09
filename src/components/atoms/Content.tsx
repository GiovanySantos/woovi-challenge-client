import { ContentKeyContext } from "@/contexts/ContentKeyContext";
import React, { useContext } from "react";

interface IProps {
  contentKey: string;
  className?: string;
}

const Content: React.FC<IProps> = (props) => {
  const { contentKey, className } = props;
  const { contentKeys } = useContext(ContentKeyContext);

  const getContent = (contentKey: string) => {
    if (contentKeys && contentKeys.length > 0) {
      return contentKeys.find((ck) => ck.key === String(contentKey))?.content;
    }
  };

  return (
    <div className={`${className}`} data-testid={`content-${contentKey}`}>
      {getContent(contentKey)}
    </div>
  );
};

export default Content;

