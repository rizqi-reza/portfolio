import React from 'react';

interface IProps {
  icon?: string;
  size?: string;
}

export const IconComponent = (props: IProps) => {
  const { icon, size } = props;
  return <span className={`pt-icon-${size ? size : 'standard'} pt-icon-${icon}`} />;
};
export default IconComponent;
