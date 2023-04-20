import { StyledSection, StyledTechSection } from "../../pages/Dashboard/style";
import { ModalTechRegister } from "../Modal/ModalTechRegister";
import { ModalTechEdit } from "../Modal/ModalTechEdit";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export const DashboardMain = () => {
  const { openModalTechRegister, openModalTechEdit, techsList, setTechClicked, setTitleTechClicked, user } = useContext(TechContext);

  return (
    <>
      <StyledSection>
        <div>
          <h1>Olá, {user.name}</h1>
          <p>{user.course_module}</p>
        </div>
      </StyledSection>
      <StyledTechSection>
        <div className="techSection__header">
          <h2>Tecnologias</h2>
          <button onClick={() => openModalTechRegister()}>+</button>
          <ModalTechRegister />
        </div>
        <div className="techSection__main">
          <ul>
            {techsList.length > 0 ? (techsList &&
              techsList.map((tech) => {
                return (
                  <li key={tech.title}>
                    <h3>{tech.title}</h3>
                    <section>
                      <p>{tech.status}</p>
                      <button
                        onClick={() => {
                          setTechClicked(tech);
                          setTitleTechClicked(tech.title)
                          openModalTechEdit();
                        }}
                       id={tech.id}>Edit</button>
                      <ModalTechEdit />
                    </section>
                  </li>
                )})) : (
                  <p>Você ainda não possui tecnologias cadastradas.</p>
                )}
          </ul>
        </div>
      </StyledTechSection>
    </>
  );
};
