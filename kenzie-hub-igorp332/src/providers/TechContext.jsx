import { createContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [modalTechRegister, setModalTechRegisterIsOpen] = useState(false);
  const [modalTechEdit, setModalTechEditIsOpen] = useState(false);
  const [user, setUser] = useState({});
  const [techsList, setTechsList] = useState([]);
  const [techClicked, setTechClicked] = useState();
  const [titleTechClicked, setTitleTechClicked] = useState()

  const submitTechRegister = async (formData) => {
    const token = localStorage.getItem("@kenzieHub:TOKEN");
    const response = await api.post("/users/techs", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.statusText === "Created") {
      toast.success("Tecnologia cadastrada com sucesso");
    } else {
      toast.error(response.data.message);
    }
  };

  const submitTechEdit = async (formData) => {
    const token = localStorage.getItem("@kenzieHub:TOKEN");
    const response = await api.put(`/users/techs/${techClicked.id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.statusText === "Created") {
      toast.success("Tecnologia editada com sucesso");
    } else {
      toast.error(response.data.message);
    }
  };

  const submitTechDelete = async () => {
    const token = localStorage.getItem("@kenzieHub:TOKEN");
    const response = await api.delete(`/users/techs/${techClicked.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.statusText === "No Content") {
      toast.success("Tecnologia deletada com sucesso");
    } else {
      toast.error(response.data.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("@kenzieHub:TOKEN");
    toast.success("Usuário deslogado com sucesso");
  };

  function openModalTechRegister() {
    setModalTechRegisterIsOpen(true);
  }

  function closeModalTechRegister() {
    setModalTechRegisterIsOpen(false);
  }

  function openModalTechEdit() {
    setModalTechEditIsOpen(true);
  }

  function closeModalTechEdit() {
    setModalTechEditIsOpen(false);
  }

  return (
    <TechContext.Provider
      value={{
        submitTechRegister,
        closeModalTechRegister,
        closeModalTechEdit,
        openModalTechEdit,
        openModalTechRegister,
        modalTechRegister,
        modalTechEdit,
        submitTechEdit,
        submitTechDelete,
        techsList,
        setTechsList,
        setTechClicked,
        techClicked,
        titleTechClicked,
        setTitleTechClicked,
        user,
        setUser,
        logout
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
