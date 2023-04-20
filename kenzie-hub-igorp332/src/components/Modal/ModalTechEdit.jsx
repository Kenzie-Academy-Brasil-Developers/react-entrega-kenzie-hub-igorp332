import Modal from "react-modal";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formTechEditZod } from "../DashboardMain/zod.js";
import { ModalTechEditStyled, customModalTechEdit } from "./style";

export const ModalTechEdit = () => {
  const {
    closeModalTechEdit,
    modalTechEdit,
    submitTechEdit,
    submitTechDelete,
    titleTechClicked
  } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formTechEditZod),
  });

  return (
    <Modal
      isOpen={modalTechEdit}
      onRequestClose={closeModalTechEdit}
      style={customModalTechEdit}
    >
      <ModalTechEditStyled>
        <header>
          <h2>Tecnologia Detalhes</h2>
          <button onClick={() => closeModalTechEdit()}>X</button>
        </header>
        <form onSubmit={
          handleSubmit(submitTechEdit)
        }>
          <label>Nome</label>
          <input
            type="text"
            value={titleTechClicked}
            disabled />
          {errors.title ? <p>{errors.title.message}</p> : null}
          <label>Selecionar status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status ? <p>{errors.status.message}</p> : null}
          <button className="saveBtn" type="submit">Salvar alterações</button>
        </form>
        <button className="deleteBtn" onClick={() => submitTechDelete()}>Excluir</button>
      </ModalTechEditStyled>
    </Modal>
  );
};
