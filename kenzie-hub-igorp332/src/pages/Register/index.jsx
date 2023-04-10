import { FormRegister } from "../../components/FormRegister"
import Logo from "../../assets/Logo.png"
import { useNavigate } from "react-router-dom"
import { StyledHeader } from "./style"

export const Register = () => {
    const navigate = useNavigate()
    const backPage = () => [
        navigate(-1)
    ]

    return (
        <>
            <StyledHeader>
                <img src={Logo} alt="Logo" />
                <button onClick={() => backPage()}>Voltar</button>
            </StyledHeader>
            <FormRegister/>
        </>
    )
}
