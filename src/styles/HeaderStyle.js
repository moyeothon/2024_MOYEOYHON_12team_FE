import styled from "styled-components";


export const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;

    #empty{
        width: 88px;
    }
`

export const Logo = styled.img`
    width: 200px;
`

export const HomeBtn = styled.button`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    height: min-content;

    background-color: #9C8D6D;
    border-radius: 10px;
    color: #fff;
    gap: 15px;
`