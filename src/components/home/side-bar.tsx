import Conversations from "../sidebar/conversations";
import LogoutButton from "../sidebar/logout-button";
import SearchInput from "../sidebar/search-input";

const SideBar = () => {
  return (
    <div className=" border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default SideBar;
