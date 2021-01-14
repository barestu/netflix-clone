import { ReactNode } from 'react';
import { Container, Input, Button, Text, Break } from './styles/OptForm';

type ComponentProps = {
  children: ReactNode;
};

export default function OptForm({ children, ...restProps }: ComponentProps) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({
  children,
  ...restProps
}: ComponentProps) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({
  children,
  ...restProps
}: ComponentProps) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
