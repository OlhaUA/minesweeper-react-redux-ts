import React from 'react';
import ReactDOM from 'react-dom';

import { Top } from './components/Top/Top';
import { Scoreboard } from './components/Scoreboard';

ReactDOM.render(
  <>
    <Top feature='Flag' firstAction='ctrl' secondAction='click'>
      Minesweeper
    </Top>
    <Scoreboard
      time='000'
      levels={['beginner', 'intermediate', 'expert']}
      bombs='010'
      onReset={() => null}
      onChangeLevel={() => null}
    />
  </>,
  document.getElementById('root')
);
