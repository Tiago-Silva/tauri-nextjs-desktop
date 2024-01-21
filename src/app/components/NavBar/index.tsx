import React from 'react';

import { 
  Left,
  Logo,
  NavBarContainer,
  NavLinks,
  Right
} from './styles';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <NavBarContainer>
      <Right>
        <Logo>MyLogo</Logo>
        <NavLinks>
          <Link href="/">
            Home
          </Link>
          <Link href="/about">
            About
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </NavLinks>
      </Right>
     <Left>
      <NavLinks>
        <Link href="/">
          Logout
        </Link>
        <Link href="/about">
          SignIn
        </Link>
      </NavLinks>
     </Left>
    </NavBarContainer>
  );
}