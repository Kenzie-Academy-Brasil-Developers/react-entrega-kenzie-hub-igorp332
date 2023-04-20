import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { formTechRegisterZod } from "../DashboardMain/zod.js";
import { TechContext } from "../../providers/TechContext";
import { ModalTechRegisterStyled, customModalTechRegister } from "./style.js";

export const ModalTechRegister = () => {
  const { submitTechRegister, closeModalTechRegister, modalTechRegister } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formTechRegisterZod),
  });

  return (
    <Modal
      isOpen={modalTechRegister}
      onRequestClose={closeModalTechRegister}
      style={customModalTechRegister}
    >
      <ModalTechRegisterStyled>
        <header>
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={() => closeModalTechRegister()}>X</button>
        </header>
        <form onSubmit={handleSubmit(submitTechRegister)}>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite aqui a tecnologia"
            {...register("title")}
          />
          {errors.title ? <p>{errors.title.message}</p> : null}
          <label>Selecionar status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status ? <p>{errors.status.message}</p> : null}
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </ModalTechRegisterStyled>
    </Modal>
  );
};
