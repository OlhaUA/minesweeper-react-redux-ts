import styled from '@emotion/styled';

export interface GameNameProps {
  children: string;
}

export const GameName = styled.h1<GameNameProps>`
  font-size: 2em;
`;
