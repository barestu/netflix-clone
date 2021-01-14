import React, { ReactNode } from 'react';
import { Container, Title, SubTitle } from './styles/Feature';

type ComponentProps = {
  children: ReactNode;
};

export default function Feature({ children, ...restProps }: ComponentProps) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({
  children,
  ...restProps
}: ComponentProps) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({
  children,
  ...restProps
}: ComponentProps) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
