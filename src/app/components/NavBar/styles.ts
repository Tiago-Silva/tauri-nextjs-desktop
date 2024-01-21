import styled from "styled-components";


export const NavBarContainer = styled.nav`
  flex: 1;
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
  top: 0;
  position: absolute;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Left = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: yellow;
  margin-right: 10px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
