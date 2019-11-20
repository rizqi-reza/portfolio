import React from "react";

interface IProps {
  title?: string;
}

export const SectionTitleComponent = (props: IProps) => {
  const { title } = props;
  return (
    <div className="section-heading text-center">
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitleComponent;
