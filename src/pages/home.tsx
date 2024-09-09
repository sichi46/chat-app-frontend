import SideBar from "../components/home/side-bar";
import MessageContainer from "../components/messages/message-container";

const Home = () => {
  return (
    <div className="mx-auto flex sm:h-[550px] md:h-[550px] rounded-lg  overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 items-center justify-center">
      <SideBar />
      <MessageContainer />
    </div>
  );
};

export default Home;
