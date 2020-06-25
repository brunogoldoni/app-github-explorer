import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #ffffff;
`;

export const HeaderProfile = styled.View`
    align-items: center;
    border-bottom-width: 1px;
    border-color: #eee;
    padding-bottom: 20px;
`;

export const Avatar = styled.Image`
    background: #eee;
    border-radius: 50px;
    height: 100px;
    width: 100px;
`;

export const Name = styled.Text`
    color: #333;
    font-family: 'RobotoSlab-Bold';
    font-size: 20px;
    margin-top: 10px;
    text-align: center;
`;

export const Bio = styled.Text`
    color: #999;
    font-family: 'RobotoSlab-Regular';
    font-size: 14px;
    line-height: 18px;
    margin-top: 5px;
    text-align: center;
`;

export const Stars = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const Starred = styled.View`
    align-items: center;
    background: #f5f5f5;
    border-radius: 4px;
    flex-direction: row;
    margin-bottom: 20px;
    padding: 10px 15px;
`;

export const OwnerAvatar = styled.Image`
    background: #eee;
    border-radius: 21px;
    height: 42px;
    width: 42px;
`;

export const Info = styled.View`
    margin-left: 10px;
    flex: 1;
`;

export const Title = styled.Text.attrs({
    numberOfLines: 1,
})`
    color: #333;
    font-family: 'RobotoSlab-Bold';
    font-size: 15px;
`;

export const Author = styled.Text`
    color: #666;
    font-family: 'RobotoSlab-Light';
    font-size: 12px;
    margin-top: 2px;
`;
