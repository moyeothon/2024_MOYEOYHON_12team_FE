import styled from 'styled-components';

export const LoginContainer = styled.div`
    width: 1120px;
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F7E8BD;
    padding: 20px;
    border: 1px solid #92856A;
    border-radius: 10px;
    box-shadow: 0px 5px 1px rgba(0, 0, 0, 0.2);
`;

export const TodayRecommendContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    justify-content: flex-start; 
    width: 100%; 
    padding: 20px; 
`;

export const Title = styled.label`
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333333;
    margin-bottom: 10px; 
`;

export const Message = styled.div`
    font-size: 0.7rem;
    color: #333333;
    font-weight: bold;
    text-align: left; 
`;

export const Divider = styled.hr`
    width: 13%; 
    border: 1px solid #92856A; 
    margin-bottom: 10px; /
`;
