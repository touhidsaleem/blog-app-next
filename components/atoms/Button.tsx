import React from "react";

type Props = {
  disabled: boolean;
  btnLabel: string;
  btnCss: string;
  icon: React.ReactNode;
  iconCss: string;
  onClick: () => void;
};

const Button = ({
  disabled,
  btnLabel,
  btnCss,
  icon,
  iconCss,
  onClick,
}: Props) => {
  return (
    <button
      disabled={disabled}
      className={`${btnCss} rounded flex justify-center items-center bg-primary-dark px-3 py-2 text-custom-white text-xs font-semibold`}
      onClick={onClick}
    >
      {btnLabel}
      {icon && (
        <span className={`${iconCss} bg-primary p-1 ml-3 rounded-sm`}>
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
