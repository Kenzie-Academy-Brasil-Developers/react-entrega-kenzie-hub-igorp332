import styled from "styled-components";

export const StyledHeader = styled.header`
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    width: 93%;
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
        width: 60%;
        margin: 20px auto;
    }
`

export const StyledMain = styled.main`
    border-top: 1px solid #868E96;
    border-bottom: 1px solid #868E96;
    width: 100%;
    padding: 40px 10px;
    h1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #F8F9FA;
    }
    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: #868E96;
        margin-top: 10px;
    }
    @media (min-width: 700px) {
        padding: 40px 0px;
        section {
            width: 60%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`
