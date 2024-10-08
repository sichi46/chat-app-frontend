import useConversation from "../../zustand/use-conversation";
import MessageInput from "./message-input";
import Messages from "./messages";
import NoChatSelected from "./no-chat -selected";

const MessageContainer = () => {
  // const noChatSelected = false;
  const { selectedConversation } = useConversation();
  return (
    <div className=" md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className=" bg-slate-500 px-4 py-2 mb-2">
            <span className=" label-text">To:</span>
            <span className=" text-gray-500 font-bold">John Doe</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
