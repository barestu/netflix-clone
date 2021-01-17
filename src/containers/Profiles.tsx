import React, { Dispatch, SetStateAction } from 'react';
import { Header, Profiles } from '../components';
import { IUserInfo } from '../hooks/useAuthListener';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

interface ISelectProfileProps {
  user: IUserInfo | null;
  setProfile: Dispatch<SetStateAction<IUserInfo | null>>;
}

export function SelectProfileContainer({
  user,
  setProfile,
}: ISelectProfileProps) {
  const onUserClicked = () => {
    setProfile(user)
  }

  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's wathching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item onClick={onUserClicked}>
            <Profiles.Picture src={user?.photoURL || ''} />
            <Profiles.Name>{user?.displayName}</Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    </>
  );
}
