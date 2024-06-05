import { ReactComponent as Right } from '../../assets/icons/icon_arrow_right.svg';

const TitleBar = ({ title, path }: { title: string; path: string[] }) => {
  return (
    <div className="w-full flex flex-col gap-y-8 py-[60px]">
      <div className="w-full flex items-center gap-x-8">
        {path.map((item, index) => (
          <div
            key={index}
            className={`flex itemcen justify-center gap-x-8 text-14 ${index !== path.length - 1 ? 'text-admin-gray-subtext' : 'text-black font-semibold'}`}
          >
            {item}
            {index !== path.length - 1 && <Right width={18} height={18} />}
          </div>
        ))}
      </div>
      <div className="text-24 text-black font-bold">{title}</div>
    </div>
  );
};

export default TitleBar;
