import React, { FC, memo } from 'react';
import styled from '@emotion/styled';

import { Cell as CellType, Coords, CellState } from '@/core/Field';

export interface CellProps {
  children: CellType;
  coords: Coords;
  onClick: (coords: Coords) => void;
}

export const isActiveCell = (cell: CellType): boolean =>
  [CellState.hidden, CellState.flag, CellState.weakFlag].includes(cell);

export const Cell: FC<CellProps> = ({ children, coords, ...rest }) => {
  const onClick = () => rest.onClick(coords);
  return <ClosedFrame />;
};

Cell.displayName = 'Cell';

export const ClosedFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  width: 1.8vh;
  height: 1.8vh;
  color: transparent;
  background-color: #d1d1d1;
  border: 0.6vh solid transparent;
  border-color: white #9e9e9e #9e9e9e white;
  &:hover {
    filter: brightness(1.1);
  }
`;

const transparent = 'rgba(0,0,0,0)';
const colors: { [key in CellType]: string } = {
  0: transparent,
  1: '#2a48ec',
  2: '#2bb13d',
  3: '#ec6561',
  4: '#233db7',
  5: '#a6070f',
  6: '#e400af',
  7: '#906a02',
  8: '#fa0707',
  9: transparent,
  10: transparent,
  11: transparent,
  12: transparent,
};

const RevealedFrame = styled(ClosedFrame)`
  border-color: #dddddd;
  cursor: default;
  color: ${({ children }) => colors[children as CellType] ?? transparent};
  &:hover {
    filter: brightness(1);
  }
`;

const Bomb = styled.div`
  border-radius: 50%;
  width: 1vh;
  height: 1vh;
  background-color: #333;
`;

const BombFrame = styled(RevealedFrame)`
  background-color: #ec433c;
`;

const Flag = styled.div`
  width: 0px;
  height: 0px;
  border-top: 0.5vh solid transparent;
  border-bottom: 0.5vh solid transparent;
  border-left: 0.5vh solid #ec433c;
`;

const WeakFlag = styled(Flag)`
  border-left: 0.5vh solid #f19996;
`;
