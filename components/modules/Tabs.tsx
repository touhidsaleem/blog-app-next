type Props = {
  label: string;
  css: string;
  active: boolean;
  onTabClick: () => void
};

const Tabs = ({ label, css, active, onTabClick }: Props) => {
  return (
    <div
      className={`${css} whitespace-nowrap py-1.5 px-3.5 text-sm font-medium bg-custom-white  rounded-full w-max cursor-pointer border select-none ${active
        ? "border-primary-dark text-primary-dark"
        : "border-secondary text-secondary"
        }`}
      onClick={() => onTabClick(label)}
    >
      {label}
    </div>
  );
};

export default Tabs;
