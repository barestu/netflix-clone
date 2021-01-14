import React, { ReactNode } from 'react';
import {
  Item,
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
} from './styles/Jumbotron';

type ComponentProps = {
  children: ReactNode;
};

interface JumbotronProps extends ComponentProps {
  direction?: string;
}

function Jumbotron({
  children,
  direction = 'row',
  ...restProps
}: JumbotronProps) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({
  children,
  ...restProps
}: ComponentProps) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({
  children,
  ...restProps
}: ComponentProps) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({
  children,
  ...restProps
}: ComponentProps) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({
  children,
  ...restProps
}: ComponentProps) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};

export default Jumbotron;
