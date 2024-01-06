import React from "react";

type Props = {
  disabled: boolean;
  btnLabel: string;
  btnCss: string;
  icon: string;
  iconCss: string;
};

const Button = ({ disabled, btnLabel, btnCss, icon, iconCss }: Props) => {
  return (
    <button
      disabled={disabled}
      className={`${btnCss} rounded flex justify-center items-center bg-primary-dark px-4 py-2 text-custom-white text-sm font-semibold`}
    >
      {btnLabel}
      {icon && (
        <span className={`${iconCss} bg-primary p-2 ml-3 rounded-sm`}>
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
