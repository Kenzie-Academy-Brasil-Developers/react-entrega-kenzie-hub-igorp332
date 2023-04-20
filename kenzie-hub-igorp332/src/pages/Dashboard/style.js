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

export const StyledSection = styled.section`
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
        div {
            width: 60%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`

export const StyledTechSection = styled.section`
    width: 100%;
    .techSection__header {
        margin: 20px auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
        width: 93%;
        h2 {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 1.8rem;
            color: #F8F9FA;
        }
        button {
            background: #212529;
            border-radius: 4px;
            color: #F8F9FA;
            font-size: 20px;
        }
    }
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 22px 19px;
        gap: 16px;
        background: #212529;
        border-radius: 4px;
        width: 80%;
        margin: 0 auto;
        margin-bottom: 50px;
        li {
            width: 100%;
            height: 49px;
            background: #121214;
            border-radius: 4px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 5px;
            h3 {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 14.21px;
                color: #FFFFFF;
                margin-left: 15px;
            }
            section {
                p {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12.182px;
                    color: #868E96;
                }
                button {
                    border-style: none;
                    background: #121214;
                    img {
                        width: 20px;
                        height: 20px;
                    }
                }
                display: flex;
                align-items: center;
                padding-right: 5px;
                gap: 10px;
            }
        }
    }
    @media (min-width: 700px) {
        .techSection__header {
            width: 60%;
        }
        ul {
            width: 58%;
            margin: 0 auto;
            margin-bottom: 50px;
        }
    }
`