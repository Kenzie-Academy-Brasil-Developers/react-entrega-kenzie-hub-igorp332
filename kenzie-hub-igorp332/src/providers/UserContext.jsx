import { createContext } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const submitFormRegister = async (formData) => {
    delete formData.passwordagain;
    const response = await api.post("/users", formData);
    if (response.statusText === "Created") {
      toast.success("Usuário cadastrado com sucesso");
    } else {
      toast.error(response.statusText);
    }
  };

  return (
    <UserContext.Provider value={{ submitFormRegister }}>
      {children}
    </UserContext.Provider>
  );
};
