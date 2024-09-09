import SideBar from "../components/home/side-bar";
import MessageContainer from "../components/messages/message-container";

const Home = () => {
  return (
    <div className="flex sm:h-[550px] md:h-[550px] rounded-lg  overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SideBar />
      <MessageContainer />
    </div>
  );
};

export default Home;
