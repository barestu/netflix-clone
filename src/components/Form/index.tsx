import React, { ReactNode, ComponentPropsWithoutRef } from 'react';
import { LinkProps } from 'react-router-dom';
import {
  Container,
  Base,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from './styles/Form';

type ComponentProps = {
  children: ReactNode;
};

export default function Form({ children, ...restProps }: ComponentProps) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Base = function FormBase({
  children,
  ...restProps
}: ComponentPropsWithoutRef<'form'>) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Error = function FormError({ children, ...restProps }: ComponentProps) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Title = function FormTitle({ children, ...restProps }: ComponentProps) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }: ComponentProps) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({
  children,
  ...restProps
}: ComponentProps) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restProps }: LinkProps) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Input = function FormInput({
  ...restProps
}: ComponentPropsWithoutRef<'input'>) {
  return <Input {...restProps} />;
};

Form.Submit = function FormSubmit({
  children,
  ...restProps
}: ComponentPropsWithoutRef<'button'>) {
  return <Submit {...restProps}>{children}</Submit>;
};
