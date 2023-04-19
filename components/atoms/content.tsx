import React from "react";

interface IProps {
  contentKey: string;
  customClassName: string;
}

const Content: React.FC<IProps> = (props) => {
  const { contentKey, customClassName } = props;

  const getContent = (contentKey: string) => {
    return contentKey;
  };

  return <p className={`${customClassName}`}>{getContent(contentKey)}</p>;
};

export default Content;

