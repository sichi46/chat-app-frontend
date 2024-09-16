import { LogOut } from "lucide-react";
import useLogout from "../../hooks/use-logout";

const LogoutButton = () => {
  // const logout = () => {
  //   alert("You are logged out");
  // };

  const { logout } = useLogout();
  return (
    <div className=" mt-auto  ">
      <LogOut className=" w-6 h-6 text-white cursor-pointer" onClick={logout} />
    </div>
  );
};

export default LogoutButton;
