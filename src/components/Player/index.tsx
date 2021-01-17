import React, {
  ComponentPropsWithRef,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, Close } from './styles/Player';

interface PlayerCtxValue {
  showPlayer: boolean;
  setShowPlayer: Dispatch<SetStateAction<boolean>>;
}

interface PlayerVideoProps extends ComponentPropsWithRef<'div'> {
  src: string;
}

export const PlayerContext = createContext<PlayerCtxValue>({
  showPlayer: false,
  setShowPlayer: () => {},
});

export default function Player({
  children,
  ...restProps
}: ComponentPropsWithRef<'div'>) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }: PlayerVideoProps) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...restProps}>
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer(!showPlayer)} {...restProps}>
      Play
    </Button>
  );
};
