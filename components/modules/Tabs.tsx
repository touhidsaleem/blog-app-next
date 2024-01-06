type Props = {
  label: string;
  css: string;
};

const Tabs = ({ label, css }: Props) => {
  return (
    <div
      className={`${css} whitespace-nowrap py-1.5 px-3.5 text-sm font-medium bg-custom-white text-secondary rounded-full w-full cursor-pointer border border-secondary`}
    >
      {label}
    </div>
  );
};

export default Tabs;
