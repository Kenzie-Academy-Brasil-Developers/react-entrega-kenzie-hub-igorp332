import { StyledMain } from "../../pages/Dashboard/style"

export const DashboardMain = ({user}) => {
    return (
        <StyledMain>
            <section>
                <h1>Olá, {user.name}</h1>
                <p>{user.course_module}</p>
            </section>
        </StyledMain>
    )
}