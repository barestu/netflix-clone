import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import {
  Container,
  Inner,
  Title,
  Item,
  Header,
  Body,
} from './styles/Accordion';

type ComponentProps = {
  children: ReactNode;
};

interface ToggleCtxState {
  toggleShow: boolean;
  setToggleShow: Dispatch<SetStateAction<boolean>>;
}

const ToggleContext = createContext<ToggleCtxState>({
  toggleShow: false,
  setToggleShow: () => {},
});

export default function Accordion({ children, ...restProps }: ComponentProps) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({
  children,
  ...restProps
}: ComponentProps) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({
  children,
  ...restProps
}: ComponentProps) {
  const [toggleShow, setToggleShow] = useState<boolean>(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({
  children,
  ...restProps
}: ComponentProps) {
  const { toggleShow, setToggleShow } = useContext<ToggleCtxState>(
    ToggleContext
  );

  return (
    <Header
      onClick={() => setToggleShow((prevState) => !prevState)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({
  children,
  ...restProps
}: ComponentProps) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
