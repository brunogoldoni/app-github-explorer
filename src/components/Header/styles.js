import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #7159c1;
    flex-direction: column;
    width: 100%;
`;

export const Content = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 20px 10px;
`;

export const Icon = styled.View`
    left: 0;
    position: absolute;
    margin-left: 10px;
`;

export const Name = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;
