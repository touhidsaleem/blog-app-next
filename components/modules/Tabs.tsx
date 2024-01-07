type Props = {
  label: string;
  css: string;
  active: boolean;
};

const Tabs = ({ label, css, active }: Props) => {
  return (
    <div
      className={`${css} whitespace-nowrap py-1.5 px-3.5 text-sm font-medium bg-custom-white  rounded-full w-max cursor-pointer border  ${
        active
          ? "border-primary-dark text-primary-dark"
          : "border-secondary text-secondary"
      }`}
    >
      {label}
    </div>
  );
};

export default Tabs;
