
import React from "react";

type Props = {
  inputLabel: string;
  placeholder: string;
  value: any;
  onchange: () => void;
  readOnly: boolean;
  multiLine: boolean; // This might be the problem
  inputCss: string;
  iconCss: string;
  inputWrapperCss: string;
  icon: React.ReactNode;
};



export default function InputWithLabel({
  inputLabel,
  placeholder,
  value,
  onchange,
  readOnly,
  inputCss,
  iconCss,
  inputWrapperCss,
  icon,
}: Props) {
  return (
    <>
      <label>{inputLabel}</label>
      <div className={inputWrapperCss}>
        {icon && <span className={iconCss}>{icon}</span>}
        <input
          placeholder={placeholder}
          readOnly={readOnly}
          onChange={onchange}
          value={value}
          className={`${inputCss} border border-secondary text-secondary w-full h-10 bg-white px-6 outline-none font-medium`}
        //   {...props}
        />
      </div>
    </>
  );
}
