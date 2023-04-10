import Logo from "../../assets/Logo.png"
import { FormLogin } from "../../components/FormLogin"
import { StyledHeader } from "./style"

export const Login = () => {

    return (
        <>
            <StyledHeader>
                <img src={Logo} alt="Logo" />
            </StyledHeader>
            <FormLogin/>
        </>
    )
}
