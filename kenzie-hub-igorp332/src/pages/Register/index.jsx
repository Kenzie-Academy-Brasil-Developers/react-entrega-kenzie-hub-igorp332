import { FormRegister } from "../../components/FormRegister"
import Logo from "../../assets/Logo.png"
import { Link } from "react-router-dom"
import { StyledHeader } from "./style"

export const Register = () => {
    return (
        <>
            <StyledHeader>
                <img src={Logo} alt="Logo" />
                <Link to="/"><button>Voltar</button></Link>
            </StyledHeader>
            <FormRegister/>
        </>
    )
}