import React, { FC, memo } from 'react';
import styled from '@emotion/styled';

export interface ResetProps {
  onReset: () => void;
}

export const Reset: FC<ResetProps> = memo(({ onReset }) => {
  return <Button onClick={onReset}>{'😯' + '🙂'}</Button>;
});

Reset.displayName = 'Reset';

const Button = styled.button`
  font-size: 1.1vw;
  height: 100%;
  cursor: pointer;
  font-weight: 700;
  border-width: 0.15vw;
  border-style: solid;
  background-color: #d1d1d1;
  border-color: white #9e9e9e #9e9e9e white;
`;
