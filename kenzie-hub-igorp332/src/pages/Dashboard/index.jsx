import Logo from "../../assets/Logo.png"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { toast } from 'react-toastify';
import { DashboardMain } from "../../components/DashboardMain";
import 'react-toastify/dist/ReactToastify.css';
import { StyledHeader } from "./style";

export const Dashboard = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const authentication = () => {
            const token = localStorage.getItem('@kenzieHub:TOKEN')
      
            if(!token) {
                navigate("/")
            }
        }
        authentication()
      }, []);

    const logout = () => {
        localStorage.removeItem("@kenzieHub:TOKEN")
        localStorage.removeItem("@kenzieHub:USERID")
        toast.success("Usuário deslogado com sucesso")
            setTimeout(() => {
                navigate("/")
                }, 2000)
    }

    const user = () => {
        const userInfo = localStorage.getItem("@kenzieHub:USERID")
        return JSON.parse(userInfo)
    }

    return (
        <>
            <StyledHeader>
                <img src={Logo} alt="Logo" />
                <button onClick={logout}>Sair</button>
            </StyledHeader>
            <DashboardMain user={user()} />
        </>
    )
}