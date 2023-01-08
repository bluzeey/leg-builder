import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <LogoContainer>
        <img src="./logo.svg" alt="Algotest-logo" />
        <h3>Algotest</h3>
      </LogoContainer>
      <LinkContainer>
        <p>Blog</p>
        <hr width="1" size="20"/>
        <p>Marketplace</p>
        <hr width="1" size="20"/>
        <p>Live Trade</p>
        <hr width="1" size="20"/>
        <p>Paper Trade</p>
        <hr width="1" size="20"/>
        <p>Portfolios</p>
        <hr width="1" size="20"/>
        <p>Hi, User</p>
      </LinkContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #3f3f3f;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;

  > h3 {
    margin-left: 1rem;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
  }
`;

const LinkContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    >p{
        margin:0 1.5rem;
        color:white
    }
`

export default Header;
