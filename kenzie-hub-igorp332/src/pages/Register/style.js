import styled from "styled-components";

export const StyledHeader = styled.header`
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    img {
        width: 101px;
        height: 14px;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 16.2426px;
        background: #212529;
        border-radius: 4px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        color: #F8F9FA;
        width: 79.54px;
        height: 31.95px;
    }
    @media (min-width: 700px) {
        width: 312px;
    }
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 33.5803px 17.5897px;
    gap: 17.59px;
    width: 80%;
    margin: 20px auto;
    background: #212529;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;
    h1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.6rem;
        color: #F8F9FA;
    }
    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 0.95rem;
        color: #868E96;
    }
    label {
        width: 264.66px;
    }
    input, select {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 13.0293px;
        gap: 8.14px;
        width: 264.66px;
        height: 38.5px;
        background: #343B41;
        border: 0.9772px solid #343B41;
        border-radius: 3.20867px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 13.0293px;
        color: #F8F9FA;
    }
    .registerBtn {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 22.3336px;
        gap: 10.15px;
        width: 259.9px;
        height: 38.5px;
        background: #FF577F;
        border: 1.2182px solid #FF577F;
        border-radius: 4.06066px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #FFFFFF;
    }
    @media (min-width: 700px) {
        width: 279px;
        margin-bottom: 60px;
        img {
            width: 144.06px;
            height: 19.97px;
        }
    }
`