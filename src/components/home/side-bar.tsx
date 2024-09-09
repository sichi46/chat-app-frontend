import Conversations from "../sidebar/conversations";
import SearchInput from "../sidebar/search-input";

const SideBar = () => {
  return (
    <div>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
    </div>
  );
};

export default SideBar;
