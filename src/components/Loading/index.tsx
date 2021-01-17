import React from 'react';
import { Spinner, LockBody, ReleaseBody, Picture } from './styles/Loading'

interface ILoadingProps {
  src: string
}

export default function Loading({ src, ...restProps }: ILoadingProps) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingRealaseBody() {
  return <ReleaseBody />
}