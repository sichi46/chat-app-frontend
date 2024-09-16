import { useState } from "react";
import { useAuthContext } from "../context/auth-context";
import toast from "react-hot-toast";
import { API } from "../api";
import axios, { HttpStatusCode } from "axios";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username: string, password: string) => {
    try {
      setLoading(true);
      const res = await axios.post(`${API}/authentication/login`, {
        username,
        password,
      });
      const data = res.data;
      setAuthUser(data);
      localStorage.setItem("token", data.token);
    } catch (error: any) {
      if (
        error.status ===
        (HttpStatusCode.BadRequest || HttpStatusCode.Unauthorized)
      ) {
        toast.error(error.data);
      }
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { login, loading };
};

export default useLogin;
