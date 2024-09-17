import useGetConversation from "../../hooks/use-get-get-conversation";
import Conversation from "./conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((item) => (
        <Conversation key={item.id} conversation={item} />
      ))}
      {loading ? <span className="loading loading-spinner mx-auto" /> : null}
    </div>
  );
};

export default Conversations;
