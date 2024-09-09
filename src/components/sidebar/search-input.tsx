import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />
      <button className="btn btn-circle bg-sky-500 text-white" type="submit">
        <Search />
      </button>
    </form>
  );
};

export default SearchInput;
