import { useEffect, useState } from "react";
import { API } from "../api";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/auth-context";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setCoversation] = useState<ConversationType[]>([]);

  const { token } = useAuthContext();

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API}/messages/conversations`, {
          token,
        });
        const data = res.data;
        if (data.error) {
          throw new Error(data.error);
        }
        setCoversation(data);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);
  return { loading, conversations };
};

export default useGetConversation;
