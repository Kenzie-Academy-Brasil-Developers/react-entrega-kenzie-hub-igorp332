import styled from "styled-components";

export const StyledHeader = styled.header`
    margin-top: 80px;
    text-align: center;
    img {
        width: 101px;
        height: 14px;
    }
    @media (min-width: 700px) {
        img {
            width: 144.06px;
            height: 19.97px;
    }
    }
`

export const StyledForm = styled.form`
    width: 80%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 33px 17px;
    gap: 17.65px;
    height: 352.69px;
    background: #212529;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    h1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14.5px;
        color: #F8F9FA;
    }
    label, p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        color: #F8F9FA;
    }
    label {
        width: 257.66px;
    }
    input {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 13.0293px;
        gap: 8.14px;
        width: 264.66px;
        height: 38.5px;
        background: #343B41;
        border: 0.9772px solid #F8F9FA;
        border-radius: 3.20867px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 13.0293px;
        color: #F8F9FA;
    }
    .enterBtn {
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
        background: #868E96;
        border: 1.2182px solid #868E96;
        border-radius: 4px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #F8F9FA;
    }
    @media (min-width: 700px) {
        width: 279px;
        img {
            width: 144.06px;
            height: 19.97px;
        }
    }
`