import React, { useEffect, useState } from 'react';

import moon from './lib/moon';

import './App.css';
import './stars.css';

const phases = [
  'Nouvelle lune',
  'Premier croissant',
  'Premier quartier',
  'Gibbeuse montante',
  'Pleine lune',
  'Gibbeuse descendante',
  'Dernier quartier',
  'Dernier croissant',
];

function App() {
  const [moonState, setMoonState] = useState(() => moon.getState());

  useEffect(() => {

    const update = () => setMoonState(moon.getState());
    const id = setInterval(update, 3000);

    return () => clearInterval(id);

  }, []);

  const { currentPhase, daysSinceNew } = moonState;

  const phaseN = currentPhase.toNumber();
  const days = daysSinceNew.dp(1).toNumber();

  return (
    <div className="app">
      <div id="stars">
        <div id='stars1'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
      </div>
      <div className="container">
        <div className="moon-container">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <image
              href="images/moon_full.png"
              x="0" y="0" height="100" width="100"
            />
            <image
              href="images/moon_full_black.png"
              x="0" y="0" height="100" width="100"
              opacity={0.8}
              mask={`url(#mask-shape-${currentPhase.toFixed()})`}
            />
          </svg>
        </div>
        <p className="days-info">
          {phases[phaseN]}
          <br/>
          {days} jours
        </p>
      </div>

      <svg width={0} height={0}>
        <defs>
          <mask id="mask-shape-0" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
            <rect    fill="white" x="0" y="0" width="1" height="1" />
          </mask>
          <mask id="mask-shape-1" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
            <rect    fill="black" x="0" y="0" width="1" height="1" />
            <rect    fill="white" x="0" y="0" width="0.5" height="1" />
            <ellipse fill="white" cx="0.5" cy="0.5" rx="0.25" ry="0.5"/>
          </mask>
          <mask id="mask-shape-2" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
            <rect    fill="black" x="0" y="0" width="1" height="1" />
            <rect    fill="white" x="0" y="0" width="0.5" height="1" />
          </mask>
          <mask id="mask-shape-3" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
            <rect    fill="white" x="0" y="0" width="1" height="1" />
            <rect    fill="black" x="0.5" y="0" width="0.5" height="1" />
            <ellipse fill="black" cx="0.5" cy="0.5" rx="0.25" ry="0.5"/>
          </mask>
          <mask id="mask-shape-4" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
            <rect    fill="black" x="0" y="0" width="1" height="1" />
            <rect    fill="white" x="0" y="0" width="0" height="0" />
          </mask>
          <mask id="mask-shape-5" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
            <rect    fill="white" x="0" y="0" width="1" height="1" />
            <rect    fill="black" x="0" y="0" width="0.5" height="1" />
            <ellipse fill="black" cx="0.5" cy="0.5" rx="0.25" ry="0.5"/>
          </mask>
          <mask id="mask-shape-6" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
            <rect    fill="black" x="0" y="0" width="1" height="1" />
            <rect    fill="white" x="0.5" y="0" width="0.5" height="1" />
          </mask>
          <mask id="mask-shape-7" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
            <rect    fill="black" x="0" y="0" width="1" height="1" />
            <rect    fill="white" x="0.5" y="0" width="0.5" height="1" />
            <ellipse fill="white" cx="0.5" cy="0.5" rx="0.25" ry="0.5"/>
          </mask>
        </defs>
      </svg>
    </div>
  );
}

export default App;
