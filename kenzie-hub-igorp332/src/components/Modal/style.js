import styled from "styled-components";

export const customModalTechRegister = {
  content: {
    top: "40%",
    left: "48%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0%",
  },
  overlay: {
    background: "rgba(255, 255, 255, 0.55)",
  },
};

export const customModalTechEdit = {
  content: {
    top: "40%",
    left: "48%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0%",
  },
  overlay: {
    background: "rgba(255, 255, 255, 0.25)",
  },
};

export const ModalTechRegisterStyled = styled.div`
  height: 294.34px;
  width: 90vw;
  max-width: 369px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 17.65px;
  background: #212529;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8.02px;
    height: 40.11px;
    width: 100%;
    background: #343b41;
    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 1.22rem;
      color: #f8f9fa;
      margin-left: 1.5rem;
    }
    button {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 600;
      font-size: 12.8347px;
      color: #868e96;
      background: #343b41;
      border-style: none;
      margin-right: 1.5rem;
    }
  }
  form {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 0.9972rem;
      color: #f8f9fa;
      width: 90%;
      margin: 0 auto;
    }
    label {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 0.9972rem;
      color: #f8f9fa;
      width: 90%;
      margin: 0 auto;
    }
    input,
    select {
      box-sizing: border-box;
      align-items: center;
      padding: 0px 13.0293px;
      background: #343b41;
      border: 0.9772px solid #f8f9fa;
      border-radius: 3.20867px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 13.0293px;
      color: #f8f9fa;
      height: 38.5px;
      width: 90%;
      margin: 0 auto;
    }
    button {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 22.3336px;
      background: #ff577f;
      border: 1.2182px solid #ff577f;
      border-radius: 4.06066px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 13.0293px;
      color: #f8f9fa;
      height: 38.5px;
      width: 90%;
      margin: 0 auto;
    }
  }
`;

export const ModalTechEditStyled = styled.div`
  position: relative;
  height: 294.34px;
  width: 90vw;
  max-width: 369px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 17.65px;
  background: #212529;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8.02px;
    height: 40.11px;
    width: 100%;
    background: #343b41;
    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 1.22rem;
      color: #f8f9fa;
      margin-left: 1.5rem;
    }
    button {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 600;
      font-size: 12.8347px;
      color: #868e96;
      background: #343b41;
      border-style: none;
      margin-right: 1.5rem;
    }
  }
  form {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 0.9972rem;
      color: #f8f9fa;
      width: 90%;
      margin: 0 auto;
    }
    label {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 0.9972rem;
      color: #f8f9fa;
      width: 90%;
      margin: 0 auto;
    }
    input,
    select {
      box-sizing: border-box;
      align-items: center;
      padding: 0px 13.0293px;
      background: #343b41;
      border: 0.9772px solid #f8f9fa;
      border-radius: 3.20867px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 13.0293px;
      color: #f8f9fa;
      height: 38.5px;
      width: 90%;
      margin: 0 auto;
    }
    .saveBtn {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 22.3336px;
      background: #ff577f;
      border: 1.2182px solid #ff577f;
      border-radius: 4.06066px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 13.0293px;
      color: #f8f9fa;
      height: 38.5px;
      width: 50%;
      max-width: 204px;
      position: absolute;
      left: 20px;
      bottom: 20px;
    }
  }
  .deleteBtn {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 22.3336px;
      background: #868e96;
      border: 1.2182px solid #868e96;
      border-radius: 4.06066px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 13.0293px;
      color: #f8f9fa;
      height: 38.5px;
      width: 30%;
      max-width: 98px;
      position: absolute;
      right: 20px;
      bottom: 20px;
    }
`;
