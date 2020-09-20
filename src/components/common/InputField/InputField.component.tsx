import React, { FC, ReactElement } from "react";
import cn from "classnames";

import "./InputField.styles.scss";

type PropTypes = {
  id: string;
  error: string | undefined;
  touched: boolean | undefined;
  label?: string;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const InputField: FC<PropTypes> = ({
  label,
  error,
  touched,
  ...otherProps
}: PropTypes): ReactElement => {
  const errorJSX =
    error && touched ? <div className="error">{error}</div> : null;
  const labelJSX = label ? (
    <label
      htmlFor={otherProps.id}
      className={cn("form-input-label", {
        shrink: otherProps.value,
      })}
    >
      {label}
    </label>
  ) : null;

  return (
    <div className="group">
      {labelJSX}
      <input className="form-input" {...otherProps} />
      {errorJSX}
    </div>
  );
};

export default InputField;
