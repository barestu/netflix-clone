import React, { ReactNode } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, Container, Logo, ButtonLink } from './styles/Header';

type ComponentProps = {
  children: ReactNode;
};

type HeaderProps = {
  children: ReactNode;
  bg?: boolean;
  src?: string;
};

type HeaderLogoProps = {
  to: string;
  src: string;
  alt: string;
};

type ButtonLinkProps = {
  children: ReactNode;
  to: string;
};

export default function Header({
  children,
  // bg = true,
  ...restProps
}: HeaderProps) {
  return <Background {...restProps}>{children}</Background>;
}

Header.Frame = function HeaderFrame({
  children,
  ...restProps
}: ComponentProps) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }: HeaderLogoProps) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({
  children,
  to,
  ...restProps
}: ButtonLinkProps) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};
