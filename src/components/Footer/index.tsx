import { ReactElement, ReactNode } from 'react';
import {
  Container,
  Column,
  Row,
  Link,
  Title,
  Text,
  Break,
} from './styles/Footer';

type ComponentProps = {
  children: ReactNode;
};

type LinkProps = {
  children: ReactNode;
  href: string;
};

function Footer({ children, ...restProps }: ComponentProps) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Column = function FooterColumn({
  children,
  ...restProps
}: ComponentProps) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Row = function FooterRow({ children, ...restProps }: ComponentProps) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Link = function FooterLink({
  children,
  href,
  ...restProps
}: LinkProps): ReactElement<LinkProps> {
  return (
    <Link href={href} {...restProps}>
      {children}
    </Link>
  );
};

Footer.Title = function FooterTitle({
  children,
  ...restProps
}: ComponentProps) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }: ComponentProps) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

export default Footer;
