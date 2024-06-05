const TextRow = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="w-full flex items-start justify-around gap-x-30">
      <div className="font-semibold text-14 text-black">{title}</div>
      <div className="grow text-14 text-gray-400">{desc}</div>
    </div>
  );
};

export default TextRow;
