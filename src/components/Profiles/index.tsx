import React, { ComponentPropsWithoutRef } from 'react';
import { Container, Title, List, Item, Picture, Name } from './styles/Profiles';

export default function Profiles({
  children,
  ...restProps
}: ComponentPropsWithoutRef<'div'>) {
  return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({
  children,
  ...restProps
}: ComponentPropsWithoutRef<'p'>) {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({
  children,
  ...restProps
}: ComponentPropsWithoutRef<'ul'>) {
  return <List {...restProps}>{children}</List>;
};

Profiles.Item = function ProfilesItem({
  children,
  ...restProps
}: ComponentPropsWithoutRef<'li'>) {
  return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({
  src,
  ...restProps
}: ComponentPropsWithoutRef<'img'>) {
  return (
    <Picture
      src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}
      {...restProps}
    />
  );
};

Profiles.Name = function ProfilesName({
  children,
  ...restProps
}: ComponentPropsWithoutRef<'p'>) {
  return <Name {...restProps}>{children}</Name>;
};
