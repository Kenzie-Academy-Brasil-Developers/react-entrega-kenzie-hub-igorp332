import Logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { DashboardMain } from "../../components/DashboardMain";
import { StyledHeader } from "./style";
import { useContext, useEffect } from "react";
import { api } from "../../services/api";
import { TechContext } from "../../providers/TechContext";

export const Dashboard = () => {
  const navigate = useNavigate()
  const { setTechsList, modalTechRegister, modalTechEdit, setUser, logout } = useContext(TechContext);

  useEffect(() => {
    const authentication = async () => {
      const token = localStorage.getItem("@kenzieHub:TOKEN");
      const response = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.statusText === "OK") {
        setUser(response.data);
        setTechsList(response.data.techs);
      } else {
        localStorage.removeItem("@kenzieHub:TOKEN");
        navigate("/");
      }
    };
    authentication();
  }, [modalTechRegister, modalTechEdit]);

  return (
    <>
      <StyledHeader>
        <img src={Logo} alt="Logo" />
        <Link to="/"><button onClick={() => logout()}>Sair</button></Link>
      </StyledHeader>
      <DashboardMain/>
    </>
  );
};
