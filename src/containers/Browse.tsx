import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './Profiles';
import { IContentInfo } from '../hooks/useContent';
import { FirebaseContext } from '../context/firebase';
import { IUserInfo } from '../hooks/useAuthListener';
import { Loading, Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

interface IBrowseProps {
  slides: {
    series: IContentInfo[];
    films: IContentInfo[];
  };
}

export function BrowseContainer({ slides }: IBrowseProps) {
  const [profile, setProfile] = useState<IUserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile?.displayName]);

  return (
    <>
      {profile?.displayName ? (
        <>
          {loading ? (
            <Loading src={user?.photoURL || ''} />
          ) : (
            <Loading.ReleaseBody />
          )}

          <Header src="joker1">
            <Header.Frame>
              <Header.Group>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                <Header.TextLink>Series</Header.TextLink>
                <Header.TextLink>Films</Header.TextLink>
              </Header.Group>

              <Header.Group>
                <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <Header.Profile>
                  <Header.Picture src={user?.photoURL} />
                  <Header.Dropdown>
                    <Header.Group>
                      <Header.Picture src={user?.photoURL} />
                      <Header.TextLink>{user?.displayName}</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                      <Header.TextLink onClick={() => firebase.auth().signOut()}>
                        Sign out
                      </Header.TextLink>
                    </Header.Group>
                  </Header.Dropdown>
                </Header.Profile>
              </Header.Group>
            </Header.Frame>

            <Header.Feature>
              <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
              <Header.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi explicabo iure qui, repudiandae doloribus consequuntur
                ipsam expedita aliquid dolore quod deleniti, aspernatur dicta
                incidunt perspiciatis maxime tenetur optio illum atque saepe
                debitis sint accusantium temporibus sapiente cupiditate.
                Laudantium quibusdam amet, modi nobis ipsa illum, laboriosam ut
                rem nihil alias harum.
              </Header.Text>
              <Header.PlayButton>Play</Header.PlayButton>
            </Header.Feature>
          </Header>
        </>
      ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
      )}
    </>
  );
}
