import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './Profiles';
import { FirebaseContext } from '../context/firebase';
import { Loading, Header, Card, Player } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { IUserInfo, IContent } from '../types/shape';
import { FooterContainer } from './Footer';

interface ISlideRow {
  title: string;
  data: IContent[]
}

interface IBrowseProps {
  slides: {
    series: ISlideRow[];
    films: ISlideRow[];
  };
}

export function BrowseContainer({ slides }: IBrowseProps) {
  const [profile, setProfile] = useState<IUserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<'series' | 'films'>('series');
  const [slideRows, setSlideRows] = useState<ISlideRow[]>([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser;

  useEffect(() => {
    if (profile?.displayName) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [profile?.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

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
                <Header.TextLink
                  active={category === 'series'}
                  onClick={() => setCategory('series')}
                >
                  Series
                </Header.TextLink>
                <Header.TextLink
                  active={category === 'films'}
                  onClick={() => setCategory('films')}
                >
                  Films
                </Header.TextLink>
              </Header.Group>

              <Header.Group>
                <Header.Search
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
                <Header.Profile>
                  <Header.Picture src={user?.photoURL} />
                  <Header.Dropdown>
                    <Header.Group>
                      <Header.Picture src={user?.photoURL} />
                      <Header.TextLink>{user?.displayName}</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                      <Header.TextLink
                        onClick={() => firebase.auth().signOut()}
                      >
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

          <Card.Group>
            {slideRows.map((slideItem: ISlideRow) => (
              <Card key={`${category}-${slideItem.title?.toLocaleLowerCase()}`}>
                <Card.Title>{slideItem.title}</Card.Title>
                <Card.Entities>
                  {slideItem.data.map((item) => (
                    <Card.Item key={item.docId} item={item}>
                      <Card.Image
                        src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                      />
                      <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  ))}
                </Card.Entities>
                <Card.Feature category={category}>
                  <Player>
                    <Player.Button />
                    <Player.Video src="/videos/bunny.mp4" />
                  </Player>
                </Card.Feature>
              </Card>
            ))}
          </Card.Group>
          <FooterContainer />
        </>
      ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
      )}
    </>
  );
}
