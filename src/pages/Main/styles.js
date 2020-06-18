import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999',
})`
    background: #eee;
    border: 1px solid #eee;
    border-radius: 4px;
    flex: 1;
    height: 40px;
    padding: 0 15px;
`;

export const SubmitButton = styled(RectButton)`
    align-items: center;
    background: #7159c1;
    border-radius: 4px;
    justify-content: center;
    margin-left: 10px;
    padding: 0 12px;
`;
