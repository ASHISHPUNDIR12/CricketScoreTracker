
interface labledInputTypes {
  title: string;
  type?: string;
  placeholder: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LabledInput = ({
  title,
  type,
  placeholder,
  onchange,
}: labledInputTypes) => {
  return (
    <div className="">
      <p>{title}</p>
      <input
        className="border p-1 rounded mb-3 "
        onChange={onchange}
        type={type || "text"}
        placeholder={placeholder}
      />
    </div>
  );
};