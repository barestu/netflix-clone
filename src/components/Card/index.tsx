import React, {
  ComponentPropsWithRef,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import {
  Container,
  Group,
  SubTitle,
  Title,
  Text,
  Image,
  Item,
  Meta,
  Entities,
  Feature,
  Content,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
} from './styles/Card';
import { IContent } from '../../types/shape';

interface CardFeatureContext {
  showFeature: boolean;
  setShowFeature: Dispatch<SetStateAction<boolean>>;
  itemFeature: IContent;
  setItemFeature: Dispatch<SetStateAction<IContent | {}>>;
}

interface ICardItemProps extends ComponentPropsWithRef<'div'> {
  item: IContent;
}

interface ICardFeatureProps extends ComponentPropsWithRef<'div'> {
  category: string;
}

export const FeatureContext = createContext<CardFeatureContext>({
  showFeature: false,
  setShowFeature: () => {},
  itemFeature: {},
  setItemFeature: () => {},
});

export default function Card({
  children,
  ...restProps
}: ComponentPropsWithRef<'div'>) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({
  children,
  ...restProps
}: ComponentPropsWithRef<'div'>) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({
  children,
  ...restProps
}: ComponentPropsWithRef<'p'>) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({
  children,
  ...restProps
}: ComponentPropsWithRef<'p'>) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({
  children,
  ...restProps
}: ComponentPropsWithRef<'p'>) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Meta = function CardMeta({
  children,
  ...restProps
}: ComponentPropsWithRef<'div'>) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Entities = function CardEntities({
  children,
  ...restProps
}: ComponentPropsWithRef<'div'>) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Feature = function CardFeature({
  children,
  category,
  ...restProps
}: ICardFeatureProps) {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

  const formatUppercase = (value: string | null | undefined) => {
    if (!value) {
      return;
    }

    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return showFeature ? (
    <Feature
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
      {...restProps}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>

        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity || 0}>
            {(itemFeature.maturity || 0) < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {formatUppercase(itemFeature.genre)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  ) : null;
};

Card.Item = function CardItem({
  children,
  item,
  ...restProps
}: ICardItemProps) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({
  ...restProps
}: ComponentPropsWithRef<'img'>) {
  return <Image {...restProps} />;
};
