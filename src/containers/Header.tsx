import React, { ReactNode } from 'react';
import { Header } from '../components';
import logo from '../logo.svg';

type HeaderProps = {
  children: ReactNode;
};

export function HeaderContainer({ children }: HeaderProps) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to="/" src={logo} alt="Netflix" />
        <Header.ButtonLink to="/">Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
