import React from 'react';

import { Container, Content, Icon, Name } from './styles';

const Header = ({ user, children }) => {
    return (
        <Container>
            <Content>
                <Icon>{children}</Icon>
                <Name>{user}</Name>
            </Content>
        </Container>
    );
};

export default Header;
