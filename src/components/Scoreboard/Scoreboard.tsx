import React, { FC, ChangeEvent } from 'react';
import styled from '@emotion/styled';

import { Counter } from './Counter';
import { Level } from './Level';
import { Reset } from './Reset';

export interface ScoreboardProps {
  time: string;
  levels: string[];
  defaultLevel?: string;
  onReset: () => void;
  onChangeLevel: (event: ChangeEvent<HTMLSelectElement>) => void;
  bombs: string;
}

export const Scoreboard: FC<ScoreboardProps> = ({
  time,
  levels,
  defaultLevel,
  bombs,
  onReset,
  onChangeLevel: onChange,
}) => (
  <Wrapper>
    <Counter>{time}</Counter>
    <div>
      <Level onChange={onChange} value={defaultLevel}>
        {levels}
      </Level>
      <Reset onReset={onReset} />
    </div>
    <Counter>{bombs}</Counter>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
