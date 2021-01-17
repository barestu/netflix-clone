import React, {
  ComponentPropsWithoutRef,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { Link as ReactRouterLink, LinkProps } from 'react-router-dom';
import {
  Background,
  Container,
  Group,
  Logo,
  ButtonLink,
  Feature,
  FeatureCallOut,
  Text,
  TextLink,
  Picture,
  Profile,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from './styles/Header';

interface IHeaderProps {
  children: ReactNode;
  bg?: boolean;
  src?: string;
  dontShowOnSmallViewPort?: boolean;
}

interface ITextLinkProps extends ComponentPropsWithoutRef<'p'> {
  active?: boolean;
}

interface ILogoProps extends ComponentPropsWithoutRef<'img'> {
  to: string;
}

interface IPictureProps extends ComponentPropsWithoutRef<'button'> {
  src?: string | null | undefined;
}

interface ISearchProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export default function Header({
  children,
  bg = true,
  dontShowOnSmallViewPort = true,
  ...restProps
}: IHeaderProps) {
  return (
    <>
      {bg ? (
        <Background
          dontShowOnSmallViewPort={dontShowOnSmallViewPort}
          {...restProps}
        >
          {children}
        </Background>
      ) : (
        children
      )}
    </>
  );
}

Header.Feature = function HeaderFeature({
  children,
  ...restProps
}: ComponentPropsWithoutRef<'div'>) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}: ComponentPropsWithoutRef<'p'>) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({
  children,
  ...restProps
}: ComponentPropsWithoutRef<'p'>) {
  return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({
  children,
  ...restProps
}: ITextLinkProps) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Header.Frame = function HeaderFrame({
  children,
  ...restProps
}: ComponentPropsWithoutRef<'div'>) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({
  children,
  ...restProps
}: ComponentPropsWithoutRef<'div'>) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Profile = function HeaderProfile({
  children,
  ...restProps
}: ComponentPropsWithoutRef<'div'>) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({
  src,
  children,
  ...restProps
}: IPictureProps) {
  return <Picture src={`/images/users/${src}.png`} {...restProps} />;
};

Header.PlayButton = function HeaderPlayButton({
  children,
  ...restProps
}: ComponentPropsWithoutRef<'button'>) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}: ISearchProps) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive((prevState) => !prevState)}>
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.Dropdown = function HeaderDropdown({
  children,
  ...restProps
}: ComponentPropsWithoutRef<'div'>) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }: ILogoProps) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({
  children,
  ...restProps
}: LinkProps) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
