import { ReactComponent as Search } from '../../assets/icons/icon_search.svg';
const SearchInput = ({
  value,
  onChange,
  placeHolder,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
}) => {
  return (
    <div className="w-[480px] flex items-center justify-start px-12 py-10 gap-x-12 bg-admin-gray-border rounded-lg">
      <Search width={24} height={24} />
      <input
        className="grow leading-6 text-black border-none outline-none bg-transparent placeholder:text-admin-gray-label"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default SearchInput;
